
import type { NextApiRequest, NextApiResponse } from 'next'
import { deobfuscateLocal } from '../../lib/deobfuscators/deobfuscateLocal'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { code } = req.body;

  if (!code || typeof code !== 'string') {
    return res.status(400).json({ error: 'Invalid code input' });
  }

  try {
    const result = deobfuscateLocal(code)
    res.status(200).json({ result })
  } catch (err: any) {
    console.error('Deobfuscation error:', err)
    res.status(500).json({ error: 'Failed to deobfuscate code' })
  }
}
