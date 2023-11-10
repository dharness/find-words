import dictionary from "./dictionary";

// Function to find all possible words from a given input string
export function findWords(input: string): string[] {
  const letters = input.toLowerCase();
  // Each letter can only be used once,
  // so keep track of which letters have been used
  const seen = new Array<boolean>(letters.length).fill(false);
  // Memoize results to avoid duplicate work
  const cache = new Map();
  const foundWords: string[] = [];

  // Recursive function to search for words
  const search = (seen: boolean[], currentPrefix: string): void => {
    if (cache.has(currentPrefix)) return;
    // If the current word is not a prefix of any known word,
    // no need to continue
    if (!dictionary.has(currentPrefix, { allowPrefix: true })) return;

    if (dictionary.has(currentPrefix)) foundWords.push(currentPrefix);

    // We are out of letters, so stop searching
    if (currentPrefix.length === letters.length) {
      cache.set(currentPrefix, foundWords);
      return;
    }

    // For each unseen letter, add it to the current word and recursively search for more words
    seen.forEach((isSeen: boolean, i: number) => {
      if (isSeen) return;
      // A new copy of seen is needed for each recursive branch we take
      const nextSeen = [...seen];
      nextSeen[i] = true;
      const nextPrefix = currentPrefix + letters[i];
      search(nextSeen, nextPrefix);
    });

    cache.set(currentPrefix, foundWords);
  };

  search(seen, "");
  return foundWords;
}
