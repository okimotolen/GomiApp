import {createStore, combineReducers} from 'redux';
import gomi1Reducer from './reducers/gomi1';
import gomi2Reducer from './reducers/gomi2';
import soundReducer from './reducers/sound';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  gomi1: gomi1Reducer,
  gomi2: gomi2Reducer,
  sound: soundReducer,
})

const store = createStore(rootReducer, composeWithDevTools());

export default store;
