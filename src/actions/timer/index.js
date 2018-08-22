import * as types from './ActionTypes';

function startTimer() {
    return {
        type: types.START_TIMER
    };
}
function restartTimer() {
    return {
        type: types.RESTART_TIMER
    };
}
function addSecond() {
    return {
        type: types.ADD_SECOND
    };
}
