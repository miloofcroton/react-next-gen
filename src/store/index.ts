import { applyMiddleware, createStore } from 'redux';
import { useDispatch } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';

const logger = createLogger({
  collapsed: true
});

const middleware = applyMiddleware(
  promise,
  thunk,
  ...(process.env.NODE_ENV === 'development' ? [logger] : [])
);


export const initializeStore = () => {
  return createStore(
    reducer,
    composeWithDevTools(middleware)
  );
};

// requires knowing "store", but we export a function that creates it
// export const useThunkDispatch = () => useDispatch<typeof store.dispatch>();
export const useAnyDispatch = () => useDispatch<any>();
