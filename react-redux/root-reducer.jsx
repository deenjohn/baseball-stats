import { combineReducers } from 'redux';

import setPlayerReducer from './reducers/setplayer-reducer.jsx';
import searchBoolReducer from './reducers/searchbool-reducer.jsx';
import setTeamReducer from './reducers/setteam-reducer.jsx';
import setYearReducer from './reducers/setyear-reducer.jsx';





export default combineReducers({
    player: setPlayerReducer,
    search: searchBoolReducer,
    team: setTeamReducer,
    year: setYearReducer
})