import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewKegForm(props) {
  function handleAddingNewKegFormSubmission(e){
    e.preventDefault();
    props.onNewKegTapping({
      name: e.target.name.value, 
      brand: e.target.brand.value,
      alcCont: e.target.alcCont.value, 
      price: e.target.price.value, 
      quantity: e.target.quantity.value, 
      id: v4()});
  }
  return (
    <>
      <form onSubmit={handleAddingNewKegFormSubmission}>
        <input
        type='text'
        name='name'
        placeholder='Beer Name'/>
        <input
        type='text'
        name='brand'
        placeholder='Brand Name'/>
        <input
        type='float'
        name='alcCont'
        placeholder='Alcohol Content'/>
        <input
        type='float'
        name='price'
        placeholder='Price'/>
        <input
        type='number'
        name='quantity'
        placeholder='Quantity'/>
        <button type='submit'>Tap Keg</button>
      </form>
    </>
  )
}

NewKegForm.propTypes = {
  onNewKegTapping: PropTypes.func
}
export default NewKegForm;