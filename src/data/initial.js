export const initial = {
  setup: false,
  roundFin: false,
  roundsRemaining: 0,
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
