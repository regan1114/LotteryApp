import * as actionTypes from '../types/ActionTypes';
import {ArrayAction} from '../../models/LotteryModel';
import {Dispatch} from 'redux';

export function addWinNumberArray(value: number) {
  const action: ArrayAction = {
    type: actionTypes.ADD_WIN_NUMBER_ARRAY,
    numberBall: value,
    numberArray: []
  };

  return simulateHttpRequest(action);
}

export function cleanWinNumberArray() {
  const action: ArrayAction = {
    type: actionTypes.CLEAR_WIN_NUMBER_ARRAY,
    numberBall: 0,
    numberArray: []
  };
  return simulateHttpRequest(action);
}

export function resetLotteryNumberArray(numberArray:number[]){
  const action: ArrayAction = {
    type: actionTypes.RESET_LOTTERY_NUMBER_ARRAY,
    numberBall: 0,
    numberArray: numberArray
  };
  return simulateHttpRequest(action);
}


export function addLotteryArray(value: number) {
  const action: ArrayAction = {
    type: actionTypes.ADD_LOTTERY_NUMBER_ARRAY,
    numberBall: value,
    numberArray: []
  };

  return simulateHttpRequest(action);
}

export function cleanLotteryArray() {
  const action: ArrayAction = {
    type: actionTypes.CLEAR_LOTTERY_NUMBER_ARRAY,
    numberBall: 0,
    numberArray: []
  };
  return simulateHttpRequest(action);
}

//// 使用這樣的寫法，會出現以下錯誤
//// Error: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
//// 1. You might have mismatching versions of React and the renderer (such as React DOM)
//// 2. You might be breaking the Rules of Hooks
//// 3. You might have more than one copy of React in the same app
//// See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.
// export function simulateHttpRequest(action: ArrayAction) {
//   const dispatch = useDispatch();
//   return dispatch(action);
// }
export const simulateHttpRequest = 
(action: ArrayAction) => async (dispatch: Dispatch<ArrayAction>) => {
  dispatch(action);
};