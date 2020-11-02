import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../auth/helper/index';
import Base from '../core/Base';
import { getCategories } from './helper/adminapicall';

const  AddProduct = () => {
    
    const {user,token} = isAuthenticated();

    const [values, setValues] = useState({
        name:"",
        description:"",
        price:"",
        stock:"",
        photo: "",
        category: [],
        category: "",
        loading: false,
        error: "",
        createdProduct: "",
        getaRedirect: false,
        formData: ""        
    });

    const {name, description, price, stock, categories, category, loading, error,createdProduct,getaRedirect,formData} = values;
    const preload = () => {
        getCategories().then(data => {
            //console.log(data);
            if(data.error){
                setValues({...values, error: data.error});
            }else{
                setValues({...values,categories: data, formData: new FormData()});
            }
        });
    };

    useEffect(() => {
        preload();
    }, []);

    const onSubmit = () => {
        //
    };
    const handleChange = name => event => {
        const  value = name === "photo" ? event.target.file[0] : event.target.value
        formData.set(name, value);
        setValues({...values, [name]: value});
    };


    const createProductForm = () => (
        <form >
          <span>Post photo</span>
          <div className="form-group">
            <label className="btn btn-block btn-warning">
              <input
                onChange={handleChange("photo")}
                type="file"
                name="photo"
                accept="image"
                placeholder="choose a file"
              />
            </label>
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("name")}
              name="photo"
              className="form-control"
              placeholder="Name"
              value={name}
            />
          </div>
          <div className="form-group">
            <textarea
              onChange={handleChange("description")}
              name="photo"
              className="form-control"
              placeholder="Description"
              value={description}
            />
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("price")}
              type="number"
              className="form-control"
              placeholder="Price"
              value={price}
            />
          </div>
          <div className="form-group">
            <select
              onChange={handleChange("category")}
              className="form-control"
              placeholder="Category"
            >
              <option>Select</option>
              {categories &&
              categories.map((cate, index) => (
                <option key={index} value={cate._id}>{cate.name}</option>
              ))
              }
            </select>
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("quantity")}
              type="number"
              className="form-control"
              placeholder="Quantity"
              value={stock}
            />
          </div>
          
          <button type="submit" onClick={onSubmit} className="btn btn-outline-warning mb-3">
            Create Product
          </button>
        </form>
      );


    return (
        <Base
        title="Add a product here"
        description=" Welcome to product creation section"
        className="container bg-warning p-4"

        >
            <Link to="/admin/dashboard" className="btn btn-md btn-dark mb-3">Admin Home</Link>
            <div className="row bg-dark text-white rounded">
                <div className="col-md-8 offset-md-2">
                    {createProductForm()}
                </div>
            </div>
        </Base>
    )
};

export default AddProduct;