import { beforeEach, describe, expect, test } from "bun:test";
import { findWords } from "../src/findWords";
import dictionary from "./../src/dictionary";

describe("findWords", () => {
  test("find all words that can be made with given letters", () => {
    expect(findWords("oogd").sort()).toEqual(
      ["goo", "good", "god", "dog", "doo"].sort()
    );
  });

  test("capital letters are treated the same as lower case letter", () => {
    expect(findWords("OOGD").sort()).toEqual(
      ["goo", "good", "god", "dog", "doo"].sort()
    );
  });

  test("empty string returns nothing", () => {
    expect(findWords("")).toEqual([]);
  });

  test("returns an empty array when no words can be formed", () => {
    expect(findWords("zzz")).toEqual([]);
    expect(findWords("1999")).toEqual([]);
    expect(findWords("q")).toEqual([]);
  });
});
