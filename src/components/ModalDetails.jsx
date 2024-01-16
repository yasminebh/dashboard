import React from 'react'
import SliderImg from './SliderImg';

const ModalDetails = (props) => {

  const { item, onClose } = props;
  
  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <h2>{item?.name}</h2>
          <SliderImg images={item.gallery} /> 
          <h2>{item?.provider}</h2>
          <h2>{item?.subCategorie}</h2>
          <h2>{item?.data}</h2>
          <h2>{item?.ref}</h2>
          <h2>{item?.Price}</h2>
          <h2>{item?.description}</h2>
          <h2>{item?.Quantity}</h2>
        </div>
      </div>
    </>
  );
}

export default ModalDetails