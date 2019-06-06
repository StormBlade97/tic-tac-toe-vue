import { produce } from "immer";

export function mark(board, pos, mark) {
  return produce(board, draft => {
    draft[pos.y][pos.x] = mark;
  });
}

export function allFieldTheSame(x, y, board, dx, dy, limit) {
  const symbol = board[y][x];
  for (let i = 0; i < limit; i++) {
    let tY = y + dy * i;
    let tX = x + dx * i;

    if (board[tY][tX] !== symbol) {
      return null;
    }
  }
  return symbol;
}

export function checkWin(board, limit) {
  for (let x = 0; x < board.length; x++) {
    let resultX = allFieldTheSame(x, 0, board, 0, 1, limit);
    let resultY = allFieldTheSame(0, x, board, 1, 0, limit);
    if (resultX) {
      return resultX;
    }
    if (resultY) {
      return resultY;
    }
  }
  const resultDiag1 = allFieldTheSame(0, 0, board, 1, 1, limit);
  if (resultDiag1) {
    return resultDiag1;
  }
  const resultDiag2 = allFieldTheSame(limit - 1, 0, board, -1, 1, limit);
  if (resultDiag2) {
    return resultDiag2;
  }
  return false;
}
