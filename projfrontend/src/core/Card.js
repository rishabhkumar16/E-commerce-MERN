import React from "react";
import ImageHelper from "./helper/ImageHelper";

const Card = ({ 
  product, addtoCart = true, removeFromCart = false
}) => {
  const showAddtoCart = (addtoCart) => {
    return (
      addtoCart && (
        <button
              onClick={() => {}}
              className="btn btn-block btn-lg btn-outline-warning text-dark shadow rounded mt-2 mb-2"
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
              onClick={() => {}}
              className="btn btn-block btn-lg btn-outline-danger text-dark shadow rounded mt-2 mb-2"
            >
              Remove from cart
            </button>
      )
    );
  };
  return (
    <div className="card text-dark bg-white border ">
      <div className="card-header lead text-center">A photo from pexels</div>
      <div className="card-body">
        <ImageHelper product = {product}/>
        <h5 className="mt-2 align-baseline">
          <span className="badge badge-secondary">Category</span>
        </h5>
        <h4 className=" rounded font-weight-normal text-dark mt-1 text-left">
          <span className="ml-2"> this photo looks great </span>
        </h4>
        <h4 className="text-left">
          <span className="ml-2"> $ 5 </span>{" "}
        </h4>
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
