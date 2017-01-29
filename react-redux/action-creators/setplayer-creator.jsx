import {SET_PLAYER} from './constants.jsx';

const setPlayerCreator = function(player){
    let newPlayer;
    player.data ? 
    newPlayer = player.data[0]
    :
    newPlayer = {}
    return {
        type: SET_PLAYER,
        general: newPlayer
    }
}

export default setPlayerCreator;