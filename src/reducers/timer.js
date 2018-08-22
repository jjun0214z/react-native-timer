import * as types from '../actions/timer/ActionTypes';

const TIME_DURATION = 1500;
const initialState = {
    isPlaying: false,
    elapsedTime: 0,
    timerDuration: TIME_DURATION
};


export default function timer(state = initialState, action) {
    switch (action.type) {
        case types.START_TIMER:
            return applyStartTimer(state);
        case types.RESTART_TIMER:
            return applyRestartTimer(state);
        case types.ADD_SECOND:
            return applyAddSecond(state);
        default:
            return state;
    }
}


function applyStartTimer(state){
    return {
        ...state,
        isPlaying: true
    }
}

function applyRestartTimer(state){
    return {
        ...state,
        isPlaying: false,
        elapsedTime: 0
    }
}

function applyAddSecond(state){
    if ( state.elapsedTime < TIME_DURATION  ) {
        return {
            ...state,
            elapsedTime: state.elapsedTime + 1
        }
    }else{
        return {
            ...state,
            isPlaying: false
        }
    }
}
