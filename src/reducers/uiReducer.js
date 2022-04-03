import { types } from "../types/types";

const initialState = {
  modalOpen: false,
  startDate: '',
  endDate: ''
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiOpenModal:
      return {
        ...state,
        modalOpen: true,
      };
    case types.uiCloseModal:
      return {
        ...state,
        modalOpen: false,
      };
    
    case types.uiGetDate:
      return {
        ...state,
        startDate: action.payload.start,
        endDate: action.payload.end
      }

    default:
      return state;
  }
};
