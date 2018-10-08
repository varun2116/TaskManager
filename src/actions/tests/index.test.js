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
import { addCard } from '../index.js'

describe('#AddCard', () => {
    it('should return the correct type', () => {
        const payload = 'Card1';
        const id = 0;
        const cid = 0;
        const expectedAction = {
          type: ADD_CARD,
          payload,
          id,
          cid
        };
        expect(addCard(payload, id)).toEqual(expectedAction);
    });
});
