import { checkWin } from "@/game.js";

describe("game logic works", () => {
  describe("check winner logic", () => {
    it("concludes draw", () => {
      const board = [[null, null, "o"], ["o", "x", "x"], ["x", "o", "x"]];
      expect(checkWin(board, 3)).toBeFalsy();
    });
    it("says O win near left edge", () => {
      const board = [
        ["o", "o", "o", null],
        ["o", "x", "x", "o", null],
        [null, null, null, null],
        ["x", "o", "x", "o"]
      ];
      expect(checkWin(board, 3)).toBe("o");
    });
    it("says X win", () => {
      const board = [["o", "x", "x"], ["o", "o", "x"], ["x", "o", "x"]];
      expect(checkWin(board, 3)).toBe("x");
    });
    it("says O diagonal win", () => {
      const board = [[null, "o", "x"], ["o", "x", "o"], ["x", null, "o"]];
      expect(checkWin(board, 3)).toBe("x");
    });
  });
});
