import React, { useEffect, useState } from "react";
import SliderImg from "./SliderImg";
import productContext from "../services/productContext";
//import './styles.css'
import { FaRegWindowClose } from "react-icons/fa";

const ModalDetails = ({ closeModal, item }) => {
  const[data, setData] = useState({});
console.log(item._id)
  const getOneProduct = () => {
    productContext
      .getById(item._id)
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((error) => console.log(error));
    //console.log(id);
  };

 useEffect(() => {
    
 getOneProduct()
  
 }, [])
 
  return (
    <>
      <div className="row ">
        <div className="col-6 bloc2">
          <SliderImg images={item?.gallery} />
        </div>

        <div className="col-6 bloc2">
          <div>
            <button onClick={closeModal} style={{ border: "none" }}>
              <FaRegWindowClose />
            </button>
          </div>
          <div className="bloc2">
            <h4> name : {data?.name}</h4>
            <p> ref : {data?.ref}</p>
            <p> Price : {data?.Price}</p>
            <p>description : {data?.description}</p>
            <p>Quantity: {data?.Quantity}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalDetails;
