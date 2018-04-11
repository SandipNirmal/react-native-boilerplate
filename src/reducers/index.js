import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";

import LoginReducer from "./reducer_login";

const rootReducer = combineReducers({
  login: LoginReducer,
  form: FormReducer
});

export default rootReducer;
