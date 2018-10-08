import reducer from '../lists';
import {
  TOGGLE_CARD_FORM,
  ADD_CARD,
  ADD_LIST,
  DRAG_START,
  DRAG_END,
  DRAG_ENTER,
  DROP_CARD,
  TOGGLE_MODAL,
  EDIT_CARD,
} from '../../constants/actionTypes';

describe('lists reducer', () => {
    let state = {
      lists: [
        {id: 0, name: "Todo", showAddCardForm: false, isDragOver: false, cards:[], cardCount: 0},
        {id: 1, name: "Doing", showAddCardForm: false, isDragOver: false, cards:[], cardCount: 0},
        {id: 2, name: "Done", showAddCardForm: false, isDragOver: false, cards:[], cardCount: 0}
      ]
    };
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual([])
    });

    it('should handle ADD_CARD', () => {
        const data = {
          type: ADD_CARD,
          payload: "Card1",
          id: 0,
          cid: 0
        };
        const expectedresult = {
          lists: [
            {id: 0, name: "Todo", showAddCardForm: false, isDragOver: false, cards:
            [{
              id: 0, title: 'Card1', desc: '', isEditable:false, isDragging: false
            }], cardCount: 1},
            {id: 1, name: "Doing", showAddCardForm: false, isDragOver: false, cards:[], cardCount: 0},
            {id: 2, name: "Done", showAddCardForm: false, isDragOver: false, cards:[], cardCount: 0}
          ]
        };
        expect(reducer(state.lists,data)).toEqual(expectedresult.lists);
    })
});
