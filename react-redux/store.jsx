import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './root-reducer.jsx'


// const initialState = {
//     searchType: "",
//     team: {
//         teamStats: {},
//         awards: {}
//     },
//     year: null
// }


export default createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    createLogger({collapsed: true})
  )
);