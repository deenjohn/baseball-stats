import {SET_PLAYER, SET_PLAYER_STATS} from '../action-creators/constants.jsx'



const initialPlayerState = {
        general: {},
        batting: [],
        pitching: [],
        awards: []
    }


export default function(state = initialPlayerState, action){
    switch(action.type){
        case SET_PLAYER_STATS:
            let batting = action.player.batting;
            let pitching = action.player.pitching;
            let awards = action.player.awards;
            let general = action.player.general;
            let newPlayer = Object.assign({}, state, {
                batting, pitching, awards, general
            });
            return newPlayer;
        case SET_PLAYER:
            let playerGeneral;
            if(!Object.keys(action.general).length) {
                playerGeneral = {
                    general: {},
                    batting: [],
                    pitching: [],
                    awards: []
                };
            }else playerGeneral = {general: action.general};
            return Object.assign({}, state, playerGeneral)
        default:
            return state;
    }
}