import { googleSearch } from '@/utils/googleSearch';
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { text } = req.body;
  const sentences = text.match(/[^.!?]+[.!?]?/g) || [];

  const results = [];

  for (const sentence of sentences) {
    if (sentence.trim().split(' ').length < 6) continue; // bỏ câu ngắn

    try {
      const data = await googleSearch(sentence.slice(0, 100));
      const snippets = data.items?.map((item) => item.snippet) || [];
      const scores = await compareWithTransformer(sentence, snippets);
      const maxScore = Math.max(...scores);
      const isParaphrased = maxScore > 0.8;
      const links = data.items?.map((item) => item.link) || [];
      results.push({ sentence, snippets, links, scores: maxScore, isParaphrased });
    } catch (error) {
      results.push({ sentence, snippets: [], links: [], error: 'Search failed' });
    }
  }
  res.status(200).json({ results });
}

async function compareWithTransformer(source, candidates) {
  const res = await axios.post('http://127.0.0.1:8000/compare', {
    source,
    candidates,
  });
  return res.data.scores;
}
