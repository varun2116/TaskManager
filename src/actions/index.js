import {
  TOGGLE_CARD_FORM,
  ADD_CARD,
  ADD_LIST,
  TOGGLE_LIST_FORM,
  DRAG_START,
  DRAG_END,
  DRAG_ENTER,
  DROP_CARD,
  TOGGLE_MODAL,
  EDIT_CARD,
} from '../constants/actionTypes.js';

let nextListId = 3;
let nextCardId = 0;

export const toggleForm = (id) => (
  {
    type: TOGGLE_CARD_FORM,
    id
  }
);

export const addCard = (payload, id) => (
  {
    type: ADD_CARD,
    payload,
    id,
    cid: nextCardId++
  }
);

export const toggleListForm = () => (
  {
    type: TOGGLE_LIST_FORM
  }
);

export const addList = payload => (
   {
      type: ADD_LIST,
      id: nextListId++,
      payload
    }
);

export const dragStart = (id, pid) => (
  {
    type: DRAG_START,
    id,
    pid
  }
);

export const dragEnd = (id, pid) => (
  {
    type: DRAG_END,
    id,
    pid
  }
);

export const dragEnter = (id) => (
  {
    type: DRAG_ENTER,
    id
  }
);

export const dropCard = (id, prevPid, newPid) => (
  {
    type: DROP_CARD,
    id,
    prevPid,
    newPid
  }
);

export const toggleModal = (id, pid) => (
  {
    type: TOGGLE_MODAL,
    id,
    pid
  }
);

export const editModal = (pid, payload) => (
  {
    type: EDIT_CARD,
    pid,
    payload
  }
)
