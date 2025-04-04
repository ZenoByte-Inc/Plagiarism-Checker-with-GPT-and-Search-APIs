import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { data } = await axios.post(
      `${process.env.API_URL_AUTH}/account/login/api`,
      { key: process.env.COPYLEAKS_API_KEY, email: process.env.COPYLEAKS_EMAIL },
      { headers: { 'Content-Type': 'application/json' } },
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to authenticate' });
  }
}
