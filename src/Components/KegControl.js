import React from 'react';
import KegInventory from './KegInventory';
import NewKegForm from './NewKegForm';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // state slices
      formVisibleOnPage: false,
      kegInventory: [],
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
    const newKegInventory = this.state.kegInventory.concat(newKeg);
    this.setState({
      kegInventory: newKegInventory,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.kegInventory.filter(keg => keg.id ===id)[0];
    this.setState({
      selectedKeg: selectedKeg
    });
  }
  handleChangeKegQuantityClick = (kegToEdit) => {
    const editedKegInventory = this.state.kegInventory
    .filter(keg => keg.id !== this.state.selectedKeg.id)
    .concat(kegToEdit);
    this.setState({
      kegInventory: editedKegInventory,
    });
  }
  handleEditClick = () => {
    this.setState({editing:true});
  }
  handleEditingKegInInventory = (kegToEdit) => {
    const editedKegInventory = this.state.kegInventory
      .filter(keg => keg.id !== this.state.selectedKeg.id)
      .concat(kegToEdit);
    this.setState({
      kegInventory: editedKegInventory,
      editing: false,
      selectedKeg: null
    })
  }
  handleDeletingKeg = (id) => {
    const newKegInventory = this.state.kegInventory
      .filter(keg => keg.id !== id);
    this.setState({
      kegInventory: newKegInventory,
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
      kegInventory={this.state.kegInventory} 
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
export default KegControl;