import { Card } from 'react-bootstrap'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../components/Product';




export default function Items() {
    const [data, setData] = useState([]);


    useEffect(async () => {
        const result = await axios(
            'https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/store/products',

        );

        setData(result.data);
    }, []);

    return (
        <div className='container'>
        <h2>Available Items.</h2>
        <h4>Click <button className='bi bi-bag-plus'></button> To Add To <button className='bi bi-cart'></button></h4>
        <hr />
        <ul>
            {data.map((item,index) => <Product key={index} item={item} />)}
        </ul>
        </div>
    );
}
