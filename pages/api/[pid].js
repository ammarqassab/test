import path from 'path';
import { promises as fs } from 'fs';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

export default async function handler(req, res) {
  const { pid } = req.query
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), 'json');
  //Read the json data file data.json
  const fileContents = await fs.readFile(jsonDirectory + `/${pid}.json`, 'utf8');
  //Return the content of the data file in json format
  res.status(200).json(fileContents);
}
