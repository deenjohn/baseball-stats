import { SET_YEAR } from '../action-creators/constants.jsx';

const initialState = {
    year: null,
    playerBatting: [],
    playerPitching: [],
    playerAwards: [],
    teamStats: [],
}

const setYearReducer = function(state = initialState, action){
    switch(action.type){
        case SET_YEAR:
            return Object.assign({}, state, {
                year: action.year,
                playerBatting: action.playerBattingStats,
                playerPitching: action.playerPitchingStats,
                playerAwards: action.playerAwards,
                teamStats: action.teamStats,
            });
        default:
            return state;
    }
}

export default setYearReducer;