import React, { useState, useEffect } from 'react'
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Product from './components/Product';
import axios from 'axios'
import Headline from './components/Headline';
import { Link } from 'react-router-dom'

// import Headline from './components/Headline';
// import Items from './pages/Items';


function App() {
    
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);
    const addToCart = (id) => {
        setCart(prevCart => {
            const found = data.find(product => product.id === id)


            return [...prevCart, found]
        })
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
        
        <Router>
            <Headline />
            <Switch>
                {/* <Route path="/home">
            <Home />
          </Route> */}
                <Route path="/cart">
                    <Cart cart={cart} />
                </Route>
                <Route path={["/home", "/",]}>
                    <>
                        <Home />
                        <div className='container'>
                            <h2>Available Items.</h2>
                            <h4>Click <i class="bi bi-bag-plus"></i> To Add To <i class="bi bi-cart"></i></h4>
                            <hr />
                            <ul>
                                {data.map((item, index) => <Product key={index} item={item} addToCart={addToCart} />)}
                            </ul>
                        </div>
                    </>
                </Route>
            </Switch>
        </Router>
        </>
    );
}









export default App;