import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardModal from '../CardModal/CardModal';

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
    const { cards, fromListIdx, isDragOver, toggleModal, editModal, } = this.props;
    return (
      <div className="cards" onDragOver={(e) => (e.preventDefault())} onDrop={(e) => (this.onDrop(e))}
        onDragEnter={(e) => (this.dragEnter(e))}>
        {cards.map((ele, idx) =>
          (
            <div key={ele.id}>
              <a className={"card " + (ele.isDragging && 'dragging')} draggable
                onDragEnd={(e) => (this.onDragEnd(e, idx, fromListIdx))}
                onDragStart={(e) => (this.onDragStart(e, idx, fromListIdx))}
                onClick={(e) => {e.preventDefault(); return toggleModal(ele.id, fromListIdx)}}
                key={ele.id}>
                  <div className="title">{ele.title}</div>
              </a>
              <CardModal {...ele} fromList={fromListIdx} toggleModal={(id, pid) => (toggleModal(id, pid))}
                editModal={(pid, payload) => (editModal(pid, payload))} />
            </div>
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
  toggleModal: PropTypes.func,
  editModal: PropTypes.func,
};

export default Cards;
