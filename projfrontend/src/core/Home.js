import React from 'react';
import { API } from '../backend';
import "../styles.css";
import Base from './Base';
import Card from './Card';

export default function Home() {
    
    return (
        <Base title="Home Page" description="Welcome to E-commerce website">
            <div className="row text-center">
                <div className="col-4">
                    <Card></Card>
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