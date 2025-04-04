import ScanResult from '@/models/ScanResult';
import useResultScan from '@/store/useResultScan';
import connectDB from '@/utils/mongodb';

export default async function handler(req, res) {
  const { setResultScan } = useResultScan.getState();

  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    const { results, scannedDocument } = req.body;
    setResultScan(req.body);
    await connectDB();

    const { scanId, totalWords } = scannedDocument;
    const { score } = results;
    const { identicalWords, minorChangedWords, relatedMeaningWords, aggregatedScore } = score;
    const scanResult = new ScanResult({
      scanId,
      totalWords,
      identicalWords,
      minorChangedWords,
      relatedMeaningWords,
      aggregatedScore,
      status: 'completed',
    });
    await scanResult.save();
    res.status(200).json({ received: true });
  } catch (error) {
    console.error('Error processing scan results:', error);
    res.status(500).json({ error: 'Error processing scan results' });
  }
}
