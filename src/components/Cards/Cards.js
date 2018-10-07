import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cards extends Component {
  onDragStart = (e, id, pid) => {
    e.dataTransfer.dropEffect = 'copy';
    e.dataTransfer.effectAllowed = 'copyMove';
    e.dataTransfer.setData("id", id);
    e.dataTransfer.setData("prevPid", pid);
    this.props.dragStart(id, pid);
  }

  onDragEnd = (e, id, pid) => {
    this.props.dragEnd(id, pid);
  }

  onDrop = (e) => {
    //alert('same')
    this.props.dropCard(e.dataTransfer.getData("id"), e.dataTransfer.getData("prevPid"), this.props.fromListIdx);
  }

  dragEnter = (e) => {
    this.props.dragEnter(this.props.fromListIdx);
  }

  render() {
    const { cards, fromListIdx, dropCard, dragLeave, dragEnter, isDragOver } = this.props;
    return (
      <div className="cards" onDragOver={(e) => (e.preventDefault())} onDrop={(e) => (this.onDrop(e))}
        onDragEnter={(e) => (this.dragEnter(e))}>
        {cards.map((ele, idx) =>
          (
            <a className={"card " + (ele.isDragging && 'dragging')} draggable
              onDragEnd={(e) => (this.onDragEnd(e, idx, fromListIdx))}
              onDragStart={(e) => (this.onDragStart(e, idx, fromListIdx))}  key={ele.id}>
              {ele.title}
            </a>
          )
        )}
        {isDragOver &&
          <div className="card dragOver"></div>
        }
      </div>
    )
  }
}

Cards.propTypes = {
  cards: PropTypes.array,
  fromListIdx: PropTypes.number,
  dropCard: PropTypes.func,
  dragLeave: PropTypes.func,
  isDragOver: PropTypes.bool,
  dragEnter: PropTypes.func,
  dropCard: PropTypes.func,
};

export default Cards;
