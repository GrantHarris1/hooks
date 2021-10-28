

import React, { useState } from 'react'
import { Row, Col, Card, CardGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Product(props) {




    return (
        <Col xm={4}
            sm={4} md={4} lg={4}
        >
            <Card>
                <Card.Img variant="top" src={props.item?.image} />
                <Card.Body>
                    <Card.Title>{props.item?.name}</Card.Title>
                    <Card.Text>
                        {props.item?.description}
                    </Card.Text>
                    {
                        props.deleteItem
                            ?
                            <button onClick={() => props.deleteItem(props.item.id)}>delete</button>
                            :
                            <>
                                <Link className="text-dark bi bi-bag-plus" onClick={() => props.addToCart(props.item.id)} to='/cart' >Add To Cart</Link >
                                Items Currently in cart: {props.cartNum}
                            </>
                    }

                </Card.Body>
            </Card>
        </Col>
    )
}


