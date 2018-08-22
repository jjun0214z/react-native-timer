import { connect } from 'react-redux';
import Timer from './presenter';
import * as actions from '../../actions/timer';


const mapStateToProps = (state) => {
    const {isPlaying, elapsedTime, timerDuration} = state.timer;
    return {
        isPlaying,
        elapsedTime,
        timerDuration
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        startTimer: () => { dispatch(actions.startTimer()) },
        restartTimer: () => { dispatch(actions.restartTimer()) },
        addSecond: () => { dispatch(actions.addSecond()) }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
