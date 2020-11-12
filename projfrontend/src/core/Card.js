import React, {useState, useEffect} from "react";
import { Redirect } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "./helper/cartHelper";
import ImageHelper from "./helper/ImageHelper";

const Card = ({ 
  product, addtoCart = true, removeFromCart = false
}) => {

  const cardTitle = product ? product.name : "A photo from pexels"
  const cardDescription = product ? product.description : "Default description"
  const cardPrice = product ? product.price : "DEFAULT"
  const cardCategory = product ? product.category : "DEFAULT"
  const[redirect, setRedirect] = useState(false);
  const[count, setCount] = useState(product.count);
  
  const addToCart = () => {
      addItemToCart(product,() => {
        setRedirect(true)
      }) 
  }

  const getARedirect = (redirect) => {
    if (redirect){
      return <Redirect to="/cart"/>
    }
  }

  const showAddtoCart = addtoCart => {
    return (
      addtoCart && (
        <button
              onClick={addToCart}
              className="btn btn-block btn-sm btn-outline-warning text-dark shadow rounded mt-2 mb-2"
            >
              Add to Cart
            </button>
      )
    );
  };
  const showRemoveFromCart = (removeFromCart) => {
    return (
      removeFromCart && (
        <button
              onClick={() => {
                removeItemFromCart(product._id);
              }}
              className="btn btn-block btn-sm btn-outline-danger text-dark shadow rounded mt-2 mb-2"
            >
              Remove from cart
            </button>
      )
    );
  };
  return (
    <div className="card text-dark bg-white border ">
      <div className="card-header lead text-center">{cardTitle}</div>
      <div className="card-body">
        {getARedirect(redirect)}
        <ImageHelper product = {product}/>
        <h6 className="mt-2 align-baseline">
          <span className="badge badge-secondary">Category</span>
        </h6>
        <h5 className=" rounded font-weight-normal text-dark mt-1 text-left">
          <span className="ml-2"> {cardDescription} </span>
        </h5>
        <h6 className="text-left">
          <span className="ml-2"> $ {cardPrice} </span>{" "}
        </h6>
        <div className="row">
          <div className="col-6">
            {showAddtoCart(addtoCart)}
          </div>
          <div className="col-6">
            {showRemoveFromCart(removeFromCart)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
