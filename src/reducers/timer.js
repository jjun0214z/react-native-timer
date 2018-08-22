import * as types from '../actions/timer';

const TIME_DURATION = 1500;
const initialState = {
    isPlaying: false,
    elapsedTime: 0,
    timerDuration: TIME_DURATION
};


export default function timer(state = initialState, action) {
    switch (action.type) {
        case types.START_TIMER:
            return {

            };
        case types.RESTART_TIMER:
            return {

            };
        case types.ADD_SECOND:
            return {

            };
        default:
            return state;
    }
}
