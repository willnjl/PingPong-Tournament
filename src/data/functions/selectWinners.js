//creates pool from remaining players so the draw function can be reused
export const selectWinners = (state) => {
  const { games } = state;
  //reduce returns flat array of just names
  const winners = games.reduce((pool, current) => {
    let winner =
      current.winner === 1 ? current.player1.name : current.player2.name;
    pool.push(winner);
    return pool;
  }, []);

  return {
    ...state,
    names: winners,
  };
};
