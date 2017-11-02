import {
  LOGIN,
  LOGOUT,
  ENTER_NAME,
  ENTER_PASS,
  STACK_OVERFLOW_DATA
} from "../actions/types";
const reducer = (state = [], action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, loggined: true };
    case LOGOUT:
      return { ...state, pass: "", name: "", loggined: false };
    case ENTER_NAME:
      return { ...state, name: action.name };
    case ENTER_PASS:
      return { ...state, pass: action.pass };
    case STACK_OVERFLOW_DATA.load:
      return { ...state, stackOverflowData: action.stackOverflowData };
    case STACK_OVERFLOW_DATA.loaded:
      return { ...state, stackOverflowData: action.stackOverflowData };
    case STACK_OVERFLOW_DATA.fail:
      return { ...state, stackOverflowData: action.stackOverflowData };
    default:
      return state;
  }
};

export default reducer;
