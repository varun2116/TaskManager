import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

class CardModal extends Component {
  clickHandler = (e) => {
    if(this.refs.editTitle.value !== ""){
      let payload = {id:this.props.id, title: this.refs.editTitle.value, desc: this.refs.editDesc.value};
      return this.props.editModal(this.props.fromList,payload);
    }
  }
  render() {
    const { id, title, desc, isEditable, fromList, toggleModal, deleteModal } = this.props;
    return (
      <Modal show={isEditable} onHide={(e) => (toggleModal(id, fromList))}>
        <Modal.Header closeButton>
          <Modal.Title>{title} Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="form">
            <div className="form-group">
              <label>Title</label>
              <input type="text" ref="editTitle" className="form-control" defaultValue={title} />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea type="text" ref="editDesc" className="form-control" defaultValue={desc}></textarea>
            </div>
            <div className="form-group text-center">
              <Button bsStyle="primary" className="m10" onClick={(e) => {this.clickHandler(e)}}>Edit</Button>
              <Button bsStyle="danger" className="m10" onClick={(e) => {e.preventDefault(); return deleteModal(fromList)}}>Delete</Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    )
  }
}

CardModal.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  desc: PropTypes.string,
  isEditable: PropTypes.bool,
  fromList: PropTypes.number,
  toggleModal: PropTypes.func,
  editModal: PropTypes.func,
}

export default CardModal;
