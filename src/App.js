import React, { useState, useEffect } from 'react'
import './App.css';
import Home from './pages/Home';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Product from './components/Product';
import axios from 'axios'

// import Headline from './components/Headline';
// import Items from './pages/Items';


function App() {
    const [data, setData] = useState([]);
const addToCart = (id) => {
console.log('added to cart : ', id)
}
 
    useEffect(async () => {
        const result = await axios(
            'https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/store/products',

        );

        setData(result.data);
    }, []);

    return (
        <>
            <Home />
            <div className='container'>
                <h2>Available Items.</h2>
                <h4>Click <button className='bi bi-bag-plus'></button> To Add To <button className='bi bi-cart'></button></h4>
                <hr />
                <ul>
                    {data.map((item, index) => <Product key={index} item={item} addToCart= {addToCart}  />)}
                </ul>
            </div>
        </>
    );
}









export default App;