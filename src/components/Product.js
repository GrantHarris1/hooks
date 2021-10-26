import React from 'react'

export default function Product(props) {
    return (
        <li>
            <a href={props.url}>{props.item.name}</a>&nbsp;&nbsp;

            <button className='bi bi-bag-plus'></button>
        </li>
    )
}
