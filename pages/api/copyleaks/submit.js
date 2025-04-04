import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { base64, filename } = req.body;
  const ACCESS_TOKEN = req.headers.authorization?.split(' ')[1];
  const SCAN_ID = uuidv4();

  try {
    const { data } = await axios.put(
      `${process.env.API_URL_BASE}/scans/submit/file/${SCAN_ID}`,
      {
        base64: base64,
        filename,
        properties: {
          sandbox: true,
          webhooks: {
            status: `${process.env.NEXT_PUBLIC_BASE_URL}/api/copyleaks/webhook`,
          },
        },
      },
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
      },
    );
    res.status(200).json({ scanId: SCAN_ID, ...data });
  } catch (error) {
    res.status(500).json({ error: error.message || 'Failed to submit scan' });
  }
}
