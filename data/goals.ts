export type Goal = {
  title: string;
  image: string;
  order: number;
};

export type Marker = {
  date: string | null;
  goals: Goal[];
};

export const GOALS_DATA: Marker[] = [
  {
    date: "2026-11-01",
    goals: [
      {
        title: "Baby's birth",
        image: "family.svg",
        order: 0,
      },
      {
        title: "New home",
        image: "home.svg",
        order: 1,
      },
    ],
  },
  {
    date: "2028-04-01",
    goals: [
      {
        title: "Holiday",
        image: "going-holiday.svg",
        order: 0,
      },
    ],
  },
  {
    date: "2029-11-01",
    goals: [
      {
        title: "Emergency fund",
        image: "em-fund.svg",
        order: 1,
      },
    ],
  },
  {
    date: "2034-01-01",
    goals: [
      {
        title: "Debt free",
        image: "debt.svg",
        order: 1,
      },
    ],
  },
  {
    date: null,
    goals: [
      {
        title: "Retire",
        image: "family.svg",
        order: 0,
      },
    ],
  },
  {
    date: null,
    goals: [
      {
        title: "Make a contribution to my community through philanthropy",
        image: "vision.svg",
        order: 1,
      },
    ],
  },
];
