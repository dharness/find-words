import { Trie } from "./trie";

const DICTIONARY_FILE_PATH = "./data/dictionary.txt";

/**
 * Loads a dictionary from a text file.
 * Each line in the file should contain a single word.
 */
async function loadDictionary(path: string): Promise<Trie> {
  // Load the dictionary from a file.
  const file = Bun.file(path);
  const text = await file.text();

  // Store the words as a trie.
  return new Trie(text.split("\n"));
}

const dictionary = await loadDictionary(DICTIONARY_FILE_PATH);
export default dictionary;
