import { createStore } from "redux";
import reducer from "./reducers";

const initialState = {
  lists: [
    {id: 0, name: "Todo", showAddCardForm: false, isDragOver: false, cards:[], cardCount: 0},
    {id: 1, name: "Doing", showAddCardForm: false, isDragOver: false, cards:[], cardCount: 0},
    {id: 2, name: "Done", showAddCardForm: false, isDragOver: false, cards:[], cardCount: 0}
  ]
};
//{id: 1, title: 'card1d', desc: '', isDragging: false}
let store = createStore(reducer, initialState);

export default store;
