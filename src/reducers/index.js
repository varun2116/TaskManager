import { combineReducers } from "redux";

import lists from "./lists";
import newlist from './newlist';

export default combineReducers({ lists, newlist });
