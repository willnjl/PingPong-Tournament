const submit = (state, { names, rules }) => ({
  ...state,
  names,
  rules,
});

export const reducer = (state, action) => {
  switch (action.type) {
    case "SUBMIT":
      return submit(state, action);
    default:
      return { ...state };
  }
};
