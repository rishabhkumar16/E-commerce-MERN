import React from 'react';
import Base from "../core/Base";
import {isAuthenticated} from "../auth/helper/index";
import { Link } from 'react-router-dom';

const AdminDashBoard = () => {

    const {user : {name, email, role}} = isAuthenticated();
    const  adminLeftSide = () => {
        return (
            <div className="card">
                <h4 className="card-header bg-dark text-white">Admin Navigation</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link to="/admin/create/category" className="nav-link text-info">Create Categories</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/admin/categories" className="nav-link text-info">Manage Categories</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/admin/create/product" className="nav-link text-info">Create Products</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/admin/products" className="nav-link text-info">Manage Products</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/admin/orders" className="nav-link text-info">Manage Order</Link>
                    </li>
                </ul>
            </div>
        )
    };
    const adminRightSide = () => {
        return (
            <div className="card mb-4">
                <h4 className="card-header bg-dark text-white">Admin Info</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <span className="badge badge-success mr-2">Name:</span>{name} 
                    </li>
                    <li className="list-group-item">
                        <span className="badge badge-success mr-2">Email:</span>{email}
                    </li>
                    <li className="list-group-item">
                        <span className="badge badge-success mr-2">Role:</span>{role}
                    </li>
                    <li className="list-group-item">
                        <span className="badge badge-danger">Hey {name}, you are viewing this page because you are an Admin !!!</span>
                    </li>
                </ul>
            </div>
        )
    };

    return (
        <Base title="Welcome to Admin area" description="Manage all of your products here" className="container bg-warning p-4">
            <div className="row">
                <div className="col-3">{adminLeftSide()}</div>
                <div className="col-9">{adminRightSide()}</div>
            </div>
        </Base>
    )
};

export default  AdminDashBoard;