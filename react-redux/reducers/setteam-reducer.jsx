import { SET_TEAM } from '../action-creators/constants.jsx';

const initialTeamState = {
    name: [],
    years: []
}

export default function(state = initialTeamState, action){
    switch(action.type){
        case SET_TEAM:
            let newTeam = {
                name: action.name,
                years: action.years
            };
            return Object.assign({}, state, newTeam);
        default:
            return state;
    };
}