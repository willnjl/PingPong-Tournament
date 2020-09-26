export const initial = {
  count: 0,
  setup: false,
  roundFin: false,
  record: [],

  rules: {
    alternateServe: 5,
    scoreToWin: 21,
  },
  games: [
    {
      id: 0,
      winner: 0,
      player1: {
        id: 1,
        name: "",
        score: 0,
      },
      player2: {
        id: 2,
        name: "",
        score: 0,
      },
    },
  ],
};
