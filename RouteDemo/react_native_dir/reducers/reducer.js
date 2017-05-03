import { combineReducers } from 'redux'
import * as TYPES from '../actiontypes/type';

const initState = {
    type : TYPES.DO_BEGIN,
    textValue : '',
}

function doWork(state = initState, action) {
    switch (action.type) {
        case TYPES.DO_BEGIN:
            return {
                ...state,
                textValue : 'DO_BEGIN'
            };
        case TYPES.DO_DOING:
            return {
                ...state,
                textValue : 'DO_DOING'
            };
        case TYPES.DO_DONE:
            return {
                ...state,
                textValue : 'DO_DONE'
            };
        default:
            return state;
    }
}

const doLogic = combineReducers({
    doWork,
})

export default doLogic