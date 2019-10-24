export const reducerFactory = ({
  reducers,
  initialState,
}) => {
  return (state = initialState, action) => {
    return reducers[action.type]
      ? reducers[action.type](state, action)
      : state;
  };
};
