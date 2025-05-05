import ScanResult from '@/models/ScanResult';
import connectDB from '@/utils/mongodb';

export default async function handler(req, res) {
  try {
    const { scanId } = req.query;
    await connectDB();
    const data = await ScanResult.findOne({ scanId });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: 'Error fetching scan results' });
  }
}
