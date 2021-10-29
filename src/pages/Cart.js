import React from 'react'
import Product from '../components/Product';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function Cart(props) {
    console.log(props)

    const deleteItem = (id) => {
        let tmpCart = props.cart.filter(product => {
            if (id !== product.id) {

                return product
            }

        })
        props.setCart(tmpCart)
    }

     const clearAll = (id) => {
        let tmpCart = props.cart.filter(product => {
            if (id) {

                return <p>empty.</p>
            }

        })
        props.setCart(tmpCart)
    }


    return (
        <div>

            <h2 className='neonText'>&nbsp;</h2>
            <h4 className='neonText' >Your current total is ${props.cartobj[0]}</h4>
            <Form className='text-light'>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Credit Card number</Form.Label>
                    <Form.Control placeholder="Enter Credit Card number" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check out now" />
                </Form.Group>

                <Button  onClick={clearAll}variant="primary" type="submit" className='bg-dark neonText border-light' >
                    Clear Cart
  </Button>&nbsp;

    <Button variant="primary" type="submit" href= 'www.venmo.com/u/Grant_Harris_' className=' border-light bg-dark neonText'>
                    Submit
  </Button>&nbsp;

  <Button as={Link} variant="primary" type="submit" to="/" className='bg-dark neonText border-light'>
                    Back to Products
  </Button>

            </Form>
            <Row className="g-4">
                {props.cart.map((item, index) => <Product key={index} item={item} deleteItem={deleteItem} />)}
            </Row>
        </div>
    )
}
