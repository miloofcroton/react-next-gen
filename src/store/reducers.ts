import { combineReducers } from 'redux';

import { clocksReducer } from 'services/clocks/data/reducers';

export default combineReducers({
  clocks: clocksReducer,
});
