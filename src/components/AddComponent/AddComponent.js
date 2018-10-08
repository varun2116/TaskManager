import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import './AddComponent.css';
import { LIST_ADD, CARD_ADD } from './constants';

class AddComponent extends Component {
  render(){
    const { isFromList, isShowForm, onToggleForm, onAddClick, } = this.props;
    let inVal = this.refs.cardInpt;
    return (
      <div className="column">
        <div className="content">
          <div className={"linkWrapper " + (isShowForm && 'hide')}>
            <a href="#" onClick={() => (onToggleForm()) }>{!isFromList && LIST_ADD}{isFromList && CARD_ADD}</a>
          </div>
          <div className={"formWrapper " + (!isShowForm && 'hide')}>
            <form className="form">
              <div className="form-group">
                <input type="text" ref="cardInpt" className="form-control" />
              </div>
              <Button bsStyle="primary" className="pull-left" onClick={() => { inVal.value !== "" && onAddClick(inVal.value); inVal.value = ""}}>Add List</Button>
              <Button bsStyle="danger" className="pull-right" onClick={() => (onToggleForm()) }>Cancel</Button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

AddComponent.propTypes = {
  isFromList: PropTypes.bool,
  isShowForm: PropTypes.bool,
  onToggleForm: PropTypes.func,
  onAddClick: PropTypes.func,
};

export default AddComponent;
