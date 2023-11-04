import { describe, expect, test } from "bun:test";
import { Trie } from "../src/trie";

describe("Trie", () => {
  test("adding a word to the trie", () => {
    const trie = new Trie();
    // The trie is initially empty.
    expect(trie.has("test")).toEqual(false);

    trie.add("test");

    // The trie now contains the word.
    expect(trie.has("test")).toEqual(true);
  });

  test("subwords are not in the trie", () => {
    const trie = new Trie();
    trie.add("test");

    expect(trie.has("tes")).toEqual(false);
    expect(trie.has("testy")).toEqual(false);
    expect(trie.has("est")).toEqual(false);
  });
});
