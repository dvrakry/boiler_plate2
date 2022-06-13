// eslint-disable-next-line

import { combineReducers } from "redux";
import user from "./user_reducer";

//리듀서가 하는 역할은 어떻게 스테이트가 변하는지를 보여주고
//변한 마지막값을 리턴해 주는 역할

const rootReducer = combineReducers({
  user,
});

export default rootReducer;
