/**
 * This file can be run directly from the command line.
 *
 * Example:
 *
 * bun run ./src/cli.ts "abc"
 */
import { findWords } from "./findWords";

// Grab the letters from the command line args.
const letters = Bun.argv[2];
console.time("findWords");

// Find all the words that can be made with the given letters.
const words = findWords(letters);

// Print the time it took to run, and the number of words found.
console.timeEnd("findWords");
console.log(words);
