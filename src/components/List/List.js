import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cards from '../Cards/Cards';
import AddComponent from '../AddComponent/AddComponent';

class List extends Component {
  render(){
    const { lists, addCard, toggleForm, dragStart, dragEnd, dragEnter, dropCard } = this.props;
    return (
      lists.map((ele, idx) =>
        (<div key={ele.id} className="column">
          <div className="content">
            <div className="title">
              <h3 className="pull-left">{ele.name}</h3>
              <span className="pull-right">{ele.cardCount}</span>
            </div>
            <Cards fromListIdx={idx} isDragOver={ele.isDragOver} cards={ele.cards || []} dragStart={(id, pid) => dragStart(id, pid)}
              dragEnd={(id, pid) => dragEnd(id, pid)} dragEnter={(id) => dragEnter(id)}  dropCard={(id, prevPid, newPid) => dropCard(id, prevPid, newPid)} />
            <AddComponent isFromList={true} isShowForm={ele.showAddCardForm}
              onAddClick={(val) => addCard(val, ele.id)} onToggleForm={() => toggleForm(ele.id)} />
          </div>
        </div>)
      )
    );
  }
}

List.propTypes = {
  lists: PropTypes.array,
  addCard: PropTypes.func,
  toggleForm: PropTypes.func,
  dragStart: PropTypes.func,
  dragEnd: PropTypes.func,
  dragEnter: PropTypes.func,
  dropCard: PropTypes.func,
};

export default List;
