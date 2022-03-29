import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
// Import Reducers
import {rootReducer} from '../reducers/RootReducer';
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

let composeEnhancers = compose;

export default function generateStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),
  );
  return store;
}
