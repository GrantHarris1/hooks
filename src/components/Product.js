
   
import React from 'react'

export default function Product(props) {
    return (
        <li>
            <a href={props.url}>{props.item.name}</a>&nbsp;&nbsp;

            <button onClick={() => props.addToCart(props.item.id)} className='bi bi-bag-plus' />
        </li>
    )
}


