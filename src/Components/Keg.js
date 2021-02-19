import React from 'react'; 
import PropTypes from 'prop-types';

function Keg(props) {
  let quantity = props.quantity;
  let price = props.price;
  if(parseInt(quantity) === 0){
    quantity = 'This Keg is Cached Out';
    price = 'orry, Out Of Stock'
  }
  return(
    <>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>{props.name }</h3>
        <h4>{props.brand}</h4>
        <p>Alc%: {props.alcCont}</p>
        <p>Price: ${price}</p>
      </div>
    </>
  )
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  alcCont: PropTypes.string,
  price: PropTypes.string,
  quantity: PropTypes.number.isRequired,
  whenKegClicked: PropTypes.func
}

export default Keg;
