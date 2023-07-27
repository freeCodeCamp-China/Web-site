import fsPromises from 'fs/promises';
import path from 'path';

interface conferenceData {
  conference: { name: string }[];
}

export async function getConferenceData(): Promise<conferenceData> {
  const filePath = path.join(process.cwd(), './data/conference.json');
  const jsonData = await fsPromises.readFile(filePath, 'utf-8');
  const objectData = JSON.parse(jsonData) as conferenceData;

  return objectData;
}
