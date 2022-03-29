import * as actionTypes from "../types/ActionTypes";
import {ArrayAction} from '../../models/LotteryModel';

// Define a type for the slice state
interface IinitialState {
  winNumberList: number[]
  lotteryNumberList: number[]
}

// Define the initial state using that type
const initialState: IinitialState = {
  winNumberList:[],
  lotteryNumberList:[]
}

const reducer = (
  state: IinitialState = initialState,
  action: ArrayAction
): IinitialState => {
  switch (action.type) {
    case actionTypes.ADD_WIN_NUMBER_ARRAY:
      return { 
        ...state,
        winNumberList: state.winNumberList.concat(action.numberBall)
      }
    case actionTypes.CLEAR_WIN_NUMBER_ARRAY:
      return { 
        ...state,
        winNumberList: state.winNumberList = []
      }
    case actionTypes.ADD_LOTTERY_NUMBER_ARRAY:
      return { 
        ...state,
        lotteryNumberList: state.lotteryNumberList.concat(action.numberBall)
      }
    case actionTypes.CLEAR_LOTTERY_NUMBER_ARRAY:
      return { 
        ...state,
        lotteryNumberList: []
      }
    case actionTypes.RESET_LOTTERY_NUMBER_ARRAY:
      return { 
        ...state,
        lotteryNumberList: action.numberArray
      }
  }
  return state;
};

export default reducer;
