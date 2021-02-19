import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props){
  const {keg, onClickingDelete} = props;
  let quantity = keg.quantity;
  if(parseInt(quantity) === 0){
    quantity = 'This Keg is Cached Out';
  }
  function handleChangeKegQuantityButton(keg, isSub, dif){
    dif = parseInt(dif);
    props.onChangingKegQuantityClick({
      name: keg.name,
      brand: keg.brand,
      alcCont: keg.alcCont,
      price: keg.price,
      quantity: isSub ? (keg.quantity === 0 ? 0 : keg.quantity = parseInt(keg.quantity) - dif) : keg.quantity = parseInt(keg.quantity) + dif,
      id: keg.id
    })
  }
  return(
   <>
    <h1>Keg Details:</h1>
    <h3>Beer Name: {keg.name}</h3>
    <p>Brand: {keg.brand}</p>
    <p>Alc%: {keg.alcCont}</p>
    <p>Price: ${keg.price}</p>
    <p>Pints Left: {quantity}</p>
    <button onClick = {() => handleChangeKegQuantityButton(keg, true, 1)}>Sell Pint</button>
    <button onClick = {() => handleChangeKegQuantityButton(keg, false, 124)}>Restock Keg</button>
    <button onClick = {props.onClickingEdit}>Update Keg</button>
    <button onClick = {() => onClickingDelete(keg.id)}>Remove Keg From List</button>
   </> 
  )
}
KegDetail.propTypes ={
  keg: PropTypes.object
}

export default KegDetail;