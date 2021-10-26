import { ListGroup, Card } from 'react-bootstrap'
import React, { useState, useEffect } from 'react';
import axios from 'axios';




export default function Items() {
    const [data, setData] = useState([]);


    useEffect(async () => {
        const result = await axios(
            'https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/store/products',

        );

        setData(result.data);
    }, []);

    return (
        <ul>
            {data.map(item => (
                <li key={item.id}>
                    <a href={item.url}>{item.name}</a>
                </li>
            ))}
        </ul>
    );
}
