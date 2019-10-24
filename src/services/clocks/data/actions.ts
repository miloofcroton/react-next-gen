
export enum Clock {
  tick = 'TICK',
  increment = 'INCREMENT',
  decrement = 'DECREMENT',
  reset = 'RESET',
};

export const serverRenderClock = (isServer) => (dispatch) => {
  return dispatch({ type: Clock.tick, light: !isServer, ts: Date.now() });
};

export const startClock = (dispatch) => {
  return setInterval(() => {
    dispatch({ type: Clock.tick, light: true, ts: Date.now() });
  }, 1000);
};

export const incrementCount = () => {
  return { type: Clock.increment };
};

export const decrementCount = () => {
  return { type: Clock.decrement };
};

export const resetCount = () => {
  return { type: Clock.reset };
};
