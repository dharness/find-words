import { Trie } from "./trie";

// Load the dictionary from a file.
const path = "./data/dictionary.txt";
const file = Bun.file(path);
const text = await file.text();

// Store the words as a trie.
const dictionary = new Trie(text.split("\n"));

export default dictionary;
