import { createStore } from 'redux';
import counter from '../reducers/rootReducer'

const store = createStore(counter);

export default store;