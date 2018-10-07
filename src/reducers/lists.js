import {
  TOGGLE_CARD_FORM,
  ADD_CARD,
  ADD_LIST,
  DRAG_START,
  DRAG_END,
  DRAG_ENTER,
  DROP_CARD,
} from '../constants/actionTypes';

export default function reducer(state = [], action){

    switch (action.type) {
      case TOGGLE_CARD_FORM:
          return state.map((ele) =>
            (ele.id === action.id) ? {...ele, showAddCardForm: !ele.showAddCardForm} : ele
          );
      case ADD_CARD:
          return state.map((ele) => {
            if(ele.id === action.id){
              ele.cards.push({id:action.cid, title: action.payload, desc:'', isDragging: false});
              ele.cardCount++;
              ele.showAddCardForm = !ele.showAddCardForm;
            }
            return ele;
          });
      case ADD_LIST:
          return [...state, {
                              id:action.id, name: action.payload, showAddCardForm: false, isDragOver: false, cards:[], cardCount: 0
                            }]
      case DRAG_START:
          return state.map((ele, index) => {
            if(index === action.pid){
              let cards = ele.cards;
              cards[action.id].isDragging = true
            }
            return ele;
          });
      case DRAG_END:
          return state.map((ele, index) => {
            ele.isDragOver = false;
            if(index === action.pid){
              let cards = ele.cards;
              cards[action.id].isDragging = false
            }
            return ele;
          });
      case DRAG_ENTER:
          return state.map((ele, idx) => {
            ele.isDragOver = false;
            if(idx === action.id){
              ele.isDragOver = true;
            }
            return ele;
          });
      case DROP_CARD:
        let prev = state[action.prevPid];
        prev.isDragOver = false;
        prev.cardCount--;
        let card = prev.cards.splice(action.id, 1)[0];
        card.isDragging = false

        return state.map((ele, index) => {
          if(index === action.newPid){
            ele.cards.push(card);
            ele.isDragOver = false;
            ele.cardCount++;
          }
          return ele;
        });
      default:
          return state;
    }
}
