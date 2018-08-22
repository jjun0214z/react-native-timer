import * as types from './ActionTypes';

export function startTimer(){
    return {
        type: types.START_TIMER
    };
}
export function restartTimer(){
    return {
        type: types.RESTART_TIMER
    };
}
export function addSecond(){
    return {
        type: types.ADD_SECOND
    };
}
