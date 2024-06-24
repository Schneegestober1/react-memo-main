export const sortLeadersEl = leaders => [...leaders].sort((a, b) => a.time - b.time);

export function calcUnits(value, unit0, unit1, unit2) {
  let reminder = value % 100;

  if (reminder >= 11 && reminder <= 19) return unit0;

  reminder = reminder % 10;

  if (reminder === 1) return unit1;
  else if (reminder >= 2 && reminder <= 4) return unit2;
  else return unit0;
}
