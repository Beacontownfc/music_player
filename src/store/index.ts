import { createStore, combineReducers } from 'redux';
import login_reducer from './login/login_reducer';
import music_reducer from './music/music_reducer';

const allReducer = combineReducers({
  login_reducer,
  music_reducer,
});

const store = createStore(allReducer);
export default store;
