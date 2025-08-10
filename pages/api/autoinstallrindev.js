import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  const token = req.query.key;

  // Opsional: proteksi token
  const VALID_TOKEN = "TOKENPEMBELI";
  if (token !== VALID_TOKEN) {
    res.status(403).send("Akses ditolak: Token salah atau tidak ada.");
    return;
  }

  const filePath = path.join(process.cwd(), 'public', 'installer');
  const file = await fs.readFile(filePath);

  res.setHeader('Content-Type', 'application/octet-stream');
  res.setHeader('Content-Disposition', 'attachment; filename="installer"');
  res.send(file);
}
