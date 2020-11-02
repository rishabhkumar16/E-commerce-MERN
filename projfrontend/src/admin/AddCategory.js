import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../auth/helper';
import Base from '../core/Base';
import { createCategory } from './helper/adminapicall';


const AddCategory = () => {
    const [name, setName] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const {user , token} = isAuthenticated();
    
    const handleChange = event => {
        setError("");
        setName(event.target.value);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        setError("");
        setSuccess(false);

        //backend request fired
        createCategory(user._id, token, {name})
            .then(data => {
                if(data.error){
                    setError(true);
                }else{
                    setError("");
                    setSuccess(true);
                    setName("");
                }
        });
    };
    const goBack = () => {
        return(
            <div className="mt-1">
                <Link className="btn btn-md btn-dark mb-3" to="/admin/dashboard"> Admin Home
                </Link>
            </div>
        );
    };
    const successMessage = () => {
        if(success){
            return <h4 className="text-white">Category created success</h4>
        }
    };
    const warningMessage = () => {
        if(error){
            return <h4 className="text-white">Failed to created success</h4>
        }
    };
    const myCategoryForm = () => (
        <form>
            <div className="form-group">
                <p className="lead text-white mt-2">Enter the Category Name</p>
                <input type="text" className="form-control my-3" autofocus required onChange={handleChange} value={name} placeholder="For Eg. Electronics"/>
                <button onClick={onSubmit} className="btn btn-outline-warning">Create Category</button>
            </div>
        </form>
    );
    return (
        <div>
           <Base title="Create a category here" description="Add a new category" className="container bg-warning p-4">
                {goBack()}
               <div className="row bg-dark rounded">
                   <div className="col-md-8 offset-md-2">
                       {successMessage()}
                       {warningMessage()}
                       {myCategoryForm()} 
                       
                   </div>
               </div>
           </Base>
        </div>
    )
}

export default AddCategory;
