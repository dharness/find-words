# find-words

A utility to find all possible words that can be formed with a given set of letters.

### Quick Start, CLI

Install dependencies and run the CLI with a string of letters as the first argument.

Note: This repo uses [Bun](https://bun.sh/)

```bash
bun install
bun start "abcde"
```

### Usage in Code

```typescript
import { findWords } from "./findWords";

const words = findWords("abc");
console.log(words); // Outputs all possible words that can be formed with 'abc'
```

### Tests

```bash
bun test
```

### Notes

The `findWords` function enumerates all possible combinations of letters, and checks if it's a word in a dictionary.

#### Storing the Dictionary

#### Array:

If we were storing the dictionary in an array, checking if a combination exists in the dictionary would be O(n).

#### Set:

We could use a Set instead, and check in O(1). However, we still spend a lot of time pursuing letter combinations that never occur like `zzz`.

#### Trie:

If we insert the words in a Trie, we can exit early on these kinds of combinations. This allows us to handle much larger inputs.

```bash
# Using a Trie
bun start "abcdefghijklmnopqrstuvwxyzaaaaaaaaeeeeeeeiiiiooouu"
[7.98s] findWords

# Using a Set
bun start "abcdefghijklmnopqrstuvwxyzaaaaaaaaeeeeeeeiiiiooouu"

does not finish in a reasonable amount of time
```

#### Memoization

We can memoize the search function so that we don't try to find the same combination twice. This is useful if we expect the input to have duplicate letters.
