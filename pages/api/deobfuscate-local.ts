import type { NextApiRequest, NextApiResponse } from 'next';
import { deobfuscateLocal } from '../../lib/webcrack-wrapper';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { code } = req.body;
  if (!code) {
    return res.status(400).json({ error: 'No code provided' });
  }

  try {
    const decoded = await deobfuscateLocal(code);
    res.status(200).json({ decoded });
  } catch (error) {
    res.status(500).json({ error: 'Error during deobfuscation' });
  }
}