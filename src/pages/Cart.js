import React from 'react'
import Product from '../components/Product';


export default function Cart(props) {
    console.log(props)

    return (
        <div>
            
            <h2>Your current Cart</h2>
            {props.cart.map((item, index) => <Product key={index} item={item} />)}
        </div>
    )
}
