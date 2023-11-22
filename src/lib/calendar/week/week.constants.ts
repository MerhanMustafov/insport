export type DayIndiceType = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export const weekDaysLookUp = {
  0: [
    { dayIndex: 0, dayString: "Sun" }, // sunday first
    { dayIndex: 1, dayString: "Mon" }, // monday
    { dayIndex: 2, dayString: "Tue" }, // tuesday
    { dayIndex: 3, dayString: "Wed" }, // wednesday
    { dayIndex: 4, dayString: "Thu" }, // thursday
    { dayIndex: 5, dayString: "Fri" }, // friday
    { dayIndex: 6, dayString: "Mon" } // saturday last
  ],
  1: [
    { dayIndex: 1, dayString: "Mon" }, // monday first
    { dayIndex: 2, dayString: "Tue" }, // tuesday
    { dayIndex: 3, dayString: "Wed" }, // wednesday
    { dayIndex: 4, dayString: "Thu" }, // thursday
    { dayIndex: 5, dayString: "Fri" }, // friday
    { dayIndex: 6, dayString: "Sat" }, // saturday
    { dayIndex: 0, dayString: "Sun" } // sunday last
  ],
  2: [
    { dayIndex: 2, dayString: "Tue" }, // tuesday first
    { dayIndex: 3, dayString: "Wed" }, // wednesday
    { dayIndex: 4, dayString: "Thu" }, // thursday
    { dayIndex: 5, dayString: "Fri" }, // friday
    { dayIndex: 6, dayString: "Sat" }, // saturday
    { dayIndex: 0, dayString: "Sun" }, // sunday
    { dayIndex: 1, dayString: "Mon" } // monday last
  ],
  3: [
    { dayIndex: 3, dayString: "Wed" }, // wednesday first
    { dayIndex: 4, dayString: "Thu" }, // thursday
    { dayIndex: 5, dayString: "Fri" }, // friday
    { dayIndex: 6, dayString: "Sat" }, // saturday
    { dayIndex: 0, dayString: "Sun" }, // sunday
    { dayIndex: 1, dayString: "Mon" }, // monday
    { dayIndex: 2, dayString: "Tue" } // tuesday last
  ],
  4: [
    { dayIndex: 4, dayString: "Thu" }, // thursday first
    { dayIndex: 5, dayString: "Fri" }, // friday
    { dayIndex: 6, dayString: "Sat" }, // saturday
    { dayIndex: 0, dayString: "Sun" }, // sunday
    { dayIndex: 1, dayString: "Mon" }, // monday
    { dayIndex: 2, dayString: "Tue" }, // tuesday
    { dayIndex: 3, dayString: "Wed" } // wednesday last
  ],
  5: [
    { dayIndex: 5, dayString: "Fri" }, // friday first
    { dayIndex: 6, dayString: "Sat" }, // saturday
    { dayIndex: 0, dayString: "Sun" }, // sunday
    { dayIndex: 1, dayString: "Mon" }, // monday
    { dayIndex: 2, dayString: "Tue" }, // tuesday
    { dayIndex: 3, dayString: "Wed" }, // wednesday
    { dayIndex: 4, dayString: "Thu" } // thursday last
  ],
  6: [
    { dayIndex: 6, dayString: "Sat" }, // saturday first
    { dayIndex: 0, dayString: "Sun" }, // sunday
    { dayIndex: 1, dayString: "Mon" }, // monday
    { dayIndex: 2, dayString: "Tue" }, // tuesday
    { dayIndex: 3, dayString: "Wed" }, // wednesday
    { dayIndex: 4, dayString: "Thu" }, // thursday
    { dayIndex: 5, dayString: "Fri" } // friday last
  ]
};
