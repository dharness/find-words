/**
 * A trie data structure.
 *
 * Example:
 *
 * > const trie = new Trie();
 * > trie.add("test");
 * > trie.has("test"); // true
 */
export class Trie {
  root: Node;
  constructor(words: string[] = []) {
    this.root = new Node("");
    words.forEach(this.add, this);
  }

  /**
   * Add a word to the trie.
   * @param word the word to add to the trie
   */
  add(word: string) {
    let current = this.root;
    for (const letter of word) {
      let next = current.children.get(letter);
      if (!next) {
        // If the letter is not in the trie, add it.
        next = new Node(letter);
        current.children.set(letter, next);
      }
      // Move down the trie, into the child node.
      current = next;
    }
    current.isWord = true;
  }

  /**
   * Check if a word is in the trie.
   * @param word
   * @returns true if the word is in the trie, false otherwise
   */
  has(word: string, { allowPrefix } = { allowPrefix: false }): boolean {
    let current = this.root;
    for (const letter of word) {
      let next = current.children.get(letter);
      if (!next) return false;
      current = next;
    }
    return allowPrefix ? true : current.isWord;
  }
}

/**
 * A node in a trie.
 */
class Node {
  children: Map<string, Node>;
  letter: string;
  isWord: boolean;
  constructor(letter: string) {
    this.children = new Map();
    this.isWord = false;
    this.letter = letter;
  }
}
