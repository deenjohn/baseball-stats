import { SET_YEAR } from './constants.jsx';

let setYearFunc = function(yearStats){
    if(!yearStats.year) {
        return {
            type: SET_YEAR,
            year: null,
            playerBattingStats: [],
            playerPitchingStats: [],
            playerAwards: [],
            teamStats: [],
        }
    }else {
        return {
            type: SET_YEAR,
            year: yearStats.year,
            playerBattingStats: yearStats.playerBattingStats,
            playerPitchingStats: yearStats.playerPitchingStats,
            playerAwards: yearStats.playerAwards,
            teamStats: yearStats.teamStats,
        }
    }
}

export default setYearFunc;