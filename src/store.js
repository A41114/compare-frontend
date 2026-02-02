import { createStore, applyMiddleware, compose } from 'redux';
import {thunk} from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { createReduxHistoryContext } from 'redux-first-history';
import { persistStore } from 'redux-persist';
import createRootReducer from './store/reducers/rootReducer';

export const browserHistory = createBrowserHistory();

const {
  createReduxHistory,
  routerMiddleware,
  routerReducer
} = createReduxHistoryContext({
  history: browserHistory,
  reduxTravelling: true,
  savePreviousLocations: true//=1
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  createRootReducer(routerReducer), // ✅ truyền đúng reducer
  composeEnhancers(applyMiddleware(routerMiddleware, thunk))
);

export const persistor = persistStore(store);
export const history = createReduxHistory(store); // ✅ phải gọi SAU createStore

export default store;









