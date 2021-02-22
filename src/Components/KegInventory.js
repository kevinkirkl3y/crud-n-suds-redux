import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegInventory(props) {

  return(
    <>
      <hr/>
      {Object.values(props.kegInventory).map((keg) =>
        <Keg 
        whenKegClicked = {props.onKegSelection}
        name={keg.name}
        brand={keg.brand}
        alcCont={keg.alcCont}
        price={keg.price}
        quantity={parseInt(keg.quantity)}
        id={keg.id}
        key={keg.id}
        />
      )}
    </>
  )
}
KegInventory.propTypes = {
  kegInventory: PropTypes.object,
  onKegSelection: PropTypes.func
};
export default KegInventory;