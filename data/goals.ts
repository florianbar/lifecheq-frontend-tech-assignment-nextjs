export const CARD_POSITION = {
  TOP: "top",
  BOTTOM: "bottom",
};

export type Goal = {
  title: string;
  image: string;
  position: (typeof CARD_POSITION)[keyof typeof CARD_POSITION];
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
        position: "top",
      },
      {
        title: "New home",
        image: "home.svg",
        position: "bottom",
      },
    ],
  },
  {
    date: "2028-04-01",
    goals: [
      {
        title: "Holiday",
        image: "going-holiday.svg",
        position: "top",
      },
    ],
  },
  {
    date: "2029-11-01",
    goals: [
      {
        title: "Emergency fund",
        image: "em-fund.svg",
        position: "bottom",
      },
    ],
  },
  {
    date: "2034-01-01",
    goals: [
      {
        title: "Debt free",
        image: "debt.svg",
        position: "bottom",
      },
    ],
  },
  {
    date: null,
    goals: [
      {
        title: "Retire",
        image: "retire.svg",
        position: "top",
      },
    ],
  },
  {
    date: null,
    goals: [
      {
        title: "Make a contribution to my community through philanthropy",
        image: "vision.svg",
        position: "bottom",
      },
    ],
  },
];
