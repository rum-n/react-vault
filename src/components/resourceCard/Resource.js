import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import './styles.css';
import resourceData from './../resourceData';

const Resource = () => {
    const [data, setData] = useState(resourceData);

    return (data.map((tile) => (
        <Card className='card' key={tile.link}>
            <Card.Body>
                <Card.Title>{tile.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">by: {tile.subtitle}</Card.Subtitle>
                    <Card.Text>{tile.text}</Card.Text>
                <Card.Link href={tile.link}>Read more</Card.Link>
            </Card.Body>
            </Card>
        ))
    )   
}

export default Resource; 