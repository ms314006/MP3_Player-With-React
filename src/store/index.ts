import { createStore } from 'redux';
import reducer from '../reducer/player';

const store = createStore(reducer);

export default store;
