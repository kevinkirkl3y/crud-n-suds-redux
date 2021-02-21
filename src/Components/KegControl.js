import React from 'react';
import KegInventory from './KegInventory';
import NewKegForm from './NewKegForm';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from '../actions/index';



class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // state slices
      selectedKeg: null,
      editing: false
    };
  }
  //Handlers
  handleClick = () => {
    if (this.state.selectedKeg != null){
      this.setState({
        selectedKeg: null,
        editing:false
      });
    }else{
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }
    
  handleAddingNewKegToInventory = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
    
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.kegInventory[id];
    this.setState({
      selectedKeg: selectedKeg
    });
  }
  handleEditClick = () => {
    this.setState({editing:true});
  }
  handleEditingKegInInventory = (kegToEdit) => {
    const { dispatch } = this.props;
    const action = a.addKeg(kegToEdit)
    dispatch(action);
    this.setState({
      editing: false,
      selectedKeg: null
    });
  }
  handleChangeKegQuantityClick = (kegToEdit) => {
    const { dispatch } = this.props;
    const action = a.addKeg(kegToEdit)
    dispatch(action);
    const action2 = a.toggleForm()
    dispatch(action2)
    this.setState({
      editing: false,
    });
  }
  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteKeg(id);
    dispatch(action);
    this.setState({
      selectedKeg: null
    });
  }
  render(){
    console.log(this.props.formVisibleOnPage)
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
    }else if (this.props.formVisibleOnPage) {
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
    kegInventory: state.kegInventory,
    formVisibleOnPage: state.formVisibleOnPage
  }
}
KegControl = connect(mapStateToProps)(KegControl);
KegControl.propTypes = {
  kegInventory: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
}
export default KegControl;