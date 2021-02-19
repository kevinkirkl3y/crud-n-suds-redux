import React from 'react';
import KegInventory from './KegInventory';
import NewKegForm from './NewKegForm';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // state slices
      formVisibleOnPage: false,
      selectedKeg: null,
      editing: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  //Handlers
  handleClick = () => {
    if (this.state.selectedKeg != null){
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing:false
      });
    }else{
      this.setState(prevState => ({
        
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewKegToInventory = (newKeg) => {
    const { dispatch } = this.props;
    const { id, name, brand, alcCont, price, quantity} = newKeg;
    const action = {
      type: 'ADD_KEG',
      id,
      name,
      brand,
      alcCont,
      price,
      quantity
    }
    dispatch(action);
    this.setState({
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.kegInventory[id]
    this.setState({
      selectedKeg: selectedKeg
    });
  }
  handleChangeKegQuantityClick = (kegToEdit) => {
    const { dispatch } = this.props;
    const { id, name, brand, alcCont, price, quantity} = kegToEdit;
    const action = {
      type: 'ADD_KEG',
      id,
      name,
      brand,
      alcCont,
      price,
      quantity
    }
    dispatch(action);
    this.setState({
      editing: false,
      formVisibleOnPage: false
    });
  }
  handleEditClick = () => {
    this.setState({editing:true});
  }
  handleEditingKegInInventory = (kegToEdit) => {
    const { dispatch } = this.props;
    const { id, name, brand, alcCont, price} = kegToEdit;
    const action = {
      type: 'ADD_KEG',
      id,
      name,
      brand,
      alcCont,
      price,
    }
    dispatch(action);
    this.setState({
      editing: false,
      formVisibleOnPage: false
    });
  }
  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_KEG',
      id
    }
    dispatch(action);
    this.setState({
      selectedKeg: null
    });
  }
  render(){
    //conditional requirements
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing){
      currentlyVisibleState = 
      <EditKegForm
      keg = {this.state.selectedKeg}
      onEditKeg = {this.handleEditingKegInInventory}
      />
      buttonText = "Return to Tap List";
    }
    else if ( this.state.selectedKeg != null){
      currentlyVisibleState =
      <KegDetail
      keg = {this.state.selectedKeg}
      onChangingKegQuantityClick = {this.handleChangeKegQuantityClick}
      onClickingEdit = {this.handleEditClick}
      onClickingDelete = {this.handleDeletingKeg}
      />
      buttonText = "Return to Tap List";
    }else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm 
      onNewKegTapping={this.handleAddingNewKegToInventory}/>;
      buttonText = "Return to Tap List";
    } else {
      currentlyVisibleState = <KegInventory 
      kegInventory={this.props.kegInventory} 
      onKegSelection={this.handleChangingSelectedKeg}/>;
      buttonText = "Tap New Keg";
    }

    return(
      <>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    )
  }
  
}
const mapStateToProps = state => {
  return {
    kegInventory: state
  }
}
KegControl = connect(mapStateToProps)(KegControl);
KegControl.propTypes = {
  kegInventory: PropTypes.object
}
export default KegControl;