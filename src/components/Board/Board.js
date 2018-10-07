import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row } from 'react-bootstrap';
import AddComponent from '../../components/AddComponent/AddComponent';
import List from '../../containers/List/List';

class Board extends Component {
  render() {
    const { showForm, toggleListForm, addList } = this.props;
    return (
      <Grid fluid className="board">
        <Row className="show-grid">
          <List />
          <AddComponent isForNewList={true} isShowForm={showForm} onToggleForm={toggleListForm} onAddClick={addList} />
        </Row>
      </Grid>
    )
  }
}

Board.propTypes = {
  showForm: PropTypes.bool,
  toggleListForm: PropTypes.func,
  addList: PropTypes.func,
};

export default Board;
