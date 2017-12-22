import { createStore, compose, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
import rootRudecer from '../reducers/index';

export default function configureStore(initState) {
  const store = createStore(rootRudecer, initState, compose(
    applyMiddleware(ReduxThunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
  return store;
}
