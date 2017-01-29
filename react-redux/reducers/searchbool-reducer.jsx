import { SEARCH_BOOL } from '../action-creators/constants.jsx';


const initialState = {
    searchBool: false
}

export default function(state = initialState, action){
    switch(action.type){
        case SEARCH_BOOL:
            return Object.assign({}, state, {searchBool: !state.searchBool});
        default:
            return state;
    }
}