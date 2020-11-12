import React , {useState, useEffect} from 'react';
import { API } from '../backend';
import "../styles.css";
import Base from './Base';
import Card from './Card';
import { loadCart } from './helper/cartHelper';

const Cart = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(loadCart())
    },[])

    const loadAllProducts = () => {
        return(
            <div>
                <h2>This section is to load products</h2>
                {products.map((product, index) => (
                    <Card
                        key={index}
                        product={product}
                        removeFromCart={true}
                        addToCart={false}

                    />
                ))}
            </div>
        )
    }
    
    const loadCheckout = () => {
        return(
            <div>
                <h2>This section is for checkout</h2>
            </div>
        )
    }
    

    return (
        <Base title="Cart" description="Ready to checkout">
            <div className="row ">
    <div className="col-6">{loadAllProducts()}</div>
    <div className="col-6">{loadCheckout()}</div>
                
            </div>
        </Base>
        );
};

export default Cart;