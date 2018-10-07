import React, { Component } from 'react';
import Board from '../../components/Board/Board';
import { connect } from 'react-redux';
import { toggleListForm, addList } from '../../actions';

export class BoardCont extends Component {
  render(){
      return <Board {...this.props} />
  }
}

export const mapStateToProps = store => {
  return {
    showForm: store.newlist
  }
}

export const mapDispatchToProps = dispatch => {
    return {
        toggleListForm: () => {
            dispatch(toggleListForm());
        },
        addList: (payload) => {
            dispatch(addList(payload));
            dispatch(toggleListForm());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
