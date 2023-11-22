export type DayIndiceType = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export function weekDaysLookUpFactory(dayIndice: DayIndiceType = 1) {
  const weekDays = {
    0: [0, 1, 2, 3, 4, 5, 6], // sunday first
    1: [1, 2, 3, 4, 5, 6, 0], // monday first
    2: [2, 3, 4, 5, 6, 0, 1], // tuesday first
    3: [3, 4, 5, 6, 0, 1, 2], // wednesday first
    4: [4, 5, 6, 0, 1, 2, 3], // thursday first
    5: [5, 6, 0, 1, 2, 3, 4], // friday first
    6: [6, 0, 1, 2, 3, 4, 5] // saturday first
  };

  return weekDays[dayIndice].reduce(
    (acc, curr, i) => {
      return {
        ...acc,
        [curr]: i + 1
      };
    },
    {} as { [k: number]: number }
  );
}
