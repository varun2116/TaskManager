import { TOGGLE_LIST_FORM } from '../constants/actionTypes';

export default function reducer(state=false, action){
  switch (action.type) {
    case TOGGLE_LIST_FORM:
      return !state;
    default:
      return state;
  }
}
