import React from 'react'

    const Card = () => {
        return (
          <div className="card text-dark bg-white border ">
            <div className="card-header lead text-center">A photo from pexels</div>
            <div className="card-body">
              <div className="rounded border border-dark p-2">
                <img
                  src="https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="photo"
                  style={{ maxHeight: "100%", maxWidth: "100%" }}
                  className="mb-3 rounded"
                />
              </div>
              <h5 className="mt-2 align-baseline">
                <span className="badge badge-secondary">Category</span> 
              </h5>
              <h4 className=" rounded font-weight-normal text-dark mt-1 text-left">
                <span className="ml-2"> this photo looks great </span> 
              </h4>
              <h4 className="text-left"><span className="ml-2"> $ 5 </span> </h4>
              <div className="row">
                <div className="col-6">
                  <button
                    onClick={() => {}}
                    className="btn btn-block btn-lg btn-outline-warning text-dark shadow rounded mt-2 mb-2"
                  >
                    Add to Cart
                  </button>
                </div>
                <div className="col-6">
                  <button
                    onClick={() => {}}
                    className="btn btn-block btn-lg btn-outline-danger text-dark shadow rounded mt-2 mb-2"
                  >
                    Remove from cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      };

export default Card;

