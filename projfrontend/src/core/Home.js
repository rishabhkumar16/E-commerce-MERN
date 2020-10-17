import React from 'react';
import { API } from '../backend';
import "../styles.css";
import Base from './Base';

export default function Home() {
    console.log("API IS", API);
    return (
        <Base title="Home Page" description="Welcome to E-commerce website">
            <div className="row">
                <div className="col-4">
                    <button className="btn btn-success">TEST</button>
                </div>
                <div className="col-4">
                    <button className="btn btn-success">TEST</button>
                </div>
                <div className="col-4">
                    <button className="btn btn-success">TEST</button>
                </div>
            </div>
        </Base>
        );
}