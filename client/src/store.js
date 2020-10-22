import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import SneakersReducer from './reducers/SneakersReducer';

const store = createStore(SneakersReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;