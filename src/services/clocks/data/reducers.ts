import { reducerFactory } from 'lib/data/redux';
import { Clock } from './actions';

const reducers = {
  [Clock.tick]: (state, action) => ({
    ...state,
    lastUpdate: action.ts,
    light: !!action.light,
  }),
  [Clock.increment]: (state, action) => ({
    ...state,
    count: state.count + 1,
  }),
  [Clock.decrement]: (state, action) => ({
    ...state,
    count: state.count - 1,
  }),
  [Clock.reset]: (state, action) => ({
    ...state,
    count: initialState.count,
  }),
};

const initialState = {
  lastUpdate: 0,
  light: false,
  count: 0
};

export const clocksReducer = reducerFactory({
  reducers,
  initialState,
});
