
import React from 'react'
import { Col, Card,} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Product(props) {




    return (
        <Col xm={4}
            sm={4} md={4} lg={4}
        >
            <Card className='h-100'>
                <Card.Img variant="top" src={props.item?.image} />
                <Card.Body>
                    <Card.Title>{props.item?.name}</Card.Title>
                    <Card.Text>
                        <p>cost ${props.item.price}</p>
                        {props.item?.description}
                    </Card.Text>
                    {
                        props.deleteItem
                            ?
                            <button onClick={() => props.deleteItem(props.item.id)}>delete</button>
                            :
                            <>
                                <Link className="text-dark bi bi-bag-plus" onClick={() => props.addToCart(props.item.id)} to='/cart' >Add To Cart</Link >&nbsp;
                                Items Currently in cart: {props.cartNum}
                            </>
                    }

                </Card.Body>
            </Card>
        </Col>
    )
}


