

import React, { useState } from 'react'
import  { Row, Col, Card, CardGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Product(props) {
    const handleSubmit = () => {

        return <p>handle submit</p>
    }
    const [count, setCount] = useState(0);

     const deleteItem =(id) => {


        let tmpProduct = Product.filter(Product => {
            if (id !== Product.id) {
                // todoItem.completed = !todoItem.completed
                console.log(Product)
                return Product
            }
        });

       

    }
    

    return (
        <>
            
            
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={props.item?.image} />
                        <Card.Body>
                            <Card.Title>{props.item?.name}</Card.Title>
                            <Card.Text>
                                {props.item?.description}
                            </Card.Text>
                            <Link onClick={() => props.addToCart(props.item.id)} 
                            className='bi bi-bag-plus' 
                            to='/cart'/>
                            Add To Cart | Currenty in cart : {count}
                            <Link />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        
            
                  
        </>
    )
}


