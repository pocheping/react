'use strict';
import {createStore} from 'redux';
import Reducer from '../reducers/Reducer.js';

const store = createStore(Reducer);

export default store;