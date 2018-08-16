
// Actions
const START_TIMER = 'START_TIMER';
const RESTART_TIMER = 'RESTART_TIMER';
const ADD_SECOND = 'ADD_SECOND';

// Action Creators
function startTimer() {
    return {
        type: START_TIMER
    };
}
function restartTimer() {
    return {
        type: RESTART_TIMER
    };
}
function addSecond() {
    return {
        type: ADD_SECOND
    };
}

// Reducer
const TIME_DURATION = 1500;
const initialState = {
    isPlaying: false,
    elapsedTime: 0,
    timerDuration: TIME_DURATION
};

function reducer(state = initialState, action){
    
}
