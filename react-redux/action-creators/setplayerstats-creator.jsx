import {SET_PLAYER_STATS} from './constants.jsx';

const setPlayerStatsCreator = function(player){
    return {
        type: SET_PLAYER_STATS,
        player: player
    }
}

export default setPlayerStatsCreator;