import React, { Component } from 'react';
import List from '../../components/List/List';
import { connect } from 'react-redux';
import {
  toggleForm,
  addCard,
  dragStart,
  dropCard,
  dragEnter,
  dragEnd,
  toggleModal,
  editModal,
  deleteModal
} from '../../actions';

export class ListCont extends Component {
  render(){
      return <List {...this.props} />
  }
}

export const mapStateToProps = store => {
  return {
    lists: store.lists
  }
};

export const mapDispatchToProps = dispatch => {
    return {
        toggleForm: (id) => {
            dispatch(toggleForm(id));
        },
        addCard: (payload, id) => {
            dispatch(addCard(payload, id));
        },
        dragStart: (id, pid) => {
            dispatch(dragStart(id, pid));
        },
        dragEnd: (id, pid) => {
            dispatch(dragEnd(id, pid));
        },
        dragEnter: (id) => {
            dispatch(dragEnter(id));
        },
        dropCard: (id, prevPid, newPid) => {
            dispatch(dropCard(id, prevPid, newPid));
        },
        toggleModal: (id, pid) => {
            dispatch(toggleModal(id, pid));
        },
        editModal: (pid, payload) => {
            dispatch(editModal(pid, payload));
        },
        deleteModal: (pid, id) => {
            dispatch(toggleModal(id, pid));
            dispatch(deleteModal(pid, id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
