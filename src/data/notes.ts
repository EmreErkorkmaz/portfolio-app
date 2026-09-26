import { getCollection } from 'astro:content';

// Skip getCollection while the folder is empty; it logs an "empty collection" warning on
// every page that asks.
const hasFiles = Object.keys(import.meta.glob('../content/notes/**/*.md')).length > 0;

/** Published notes, newest first. */
export async function getNotes() {
  if (!hasFiles) return [];
  const notes = await getCollection('notes', ({ data }) => !data.draft);
  return notes.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
