import React from 'react';
import PropTypes from 'prop-types';

function EditKegForm(props){
  const { keg } =props;

  function handleEditKegFormSubmission(e) {
    e.preventDefault();
    props.onEditKeg({
      name: e.target.name.value,
      brand: e.target.brand.value,
      alcCont: e.target.alcCont.value,
      price: e.target.price.value,
      quantity: e.target.quantity.value,
      id: keg.id
    });
  }
  return (
    <>
      <form onSubmit={handleEditKegFormSubmission}>
        <input
        type='text'
        name='name'
        defaultValue={keg.name}
        placeholder='Beer Name'/>
        <input
        type='text'
        name='brand'
        defaultValue={keg.brand}
        placeholder='Brand Name'/>
        <input
        type='number'
        step='0.01'
        name='alcCont'
        defaultValue={keg.alcCont}
        placeholder='Alcohol Content'/>
        <input
        type='number'
        step='0.01'
        name='price'
        defaultValue={keg.price}
        placeholder='Price'/>
        <input
        type='number'
        name='quantity'
        defaultValue={keg.quantity}
        placeholder='Quantity'/>
        <button type='submit'>Update Tapped Keg</button>
      </form>
    </>
  )
}
EditKegForm.propTypes = {
  keg: PropTypes.object,
  onEditKeg: PropTypes.func
}

export default EditKegForm;