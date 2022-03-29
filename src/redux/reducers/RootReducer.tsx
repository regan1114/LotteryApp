import {combineReducers} from 'redux';
import lotteryReducer from './LotteryReducer';

export const rootReducer = combineReducers({
    lottery: lotteryReducer,
});
