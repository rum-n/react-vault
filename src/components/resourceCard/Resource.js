import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import './styles.css';
import resourceData from './../resourceData';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

const Resource = () => {
    const [data, setData] = useState(resourceData);
    const [searchText, setSearchText] = useState("");

    const excludeColumns = ["link"];

    const handleChange = value => {
        setSearchText(value);
        filterData(value);
      };

    const filterData = (value) => {
        const lowercasedValue = value.toLowerCase().trim();
        if (lowercasedValue === "") setData(resourceData);
        else {
          const filteredData = resourceData.filter(item => {
            return Object.keys(item).some(key =>
              excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowercasedValue)
            );
          });
          setData(filteredData);
        }
      }

    return (
        <main>
        <Form className='filter'>
        <FormControl 
            type="text" 
            placeholder="Filter" 
            className="mr-sm-2"
            value={searchText}
            onChange={e => handleChange(e.target.value)} />
        </Form>
        <div className='resource-list'>
            {data.map((tile) => (
            <Card className='card' key={tile.link}>
                <Card.Body>
                    <Card.Title>{tile.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">by: {tile.subtitle}</Card.Subtitle>
                        <Card.Text>{tile.text}</Card.Text>
                    <Card.Link className='card-link' href={tile.link}>Learn more</Card.Link>
                    {/* <Button variant="outline-primary" size="sm" href={tile.link}>Learn more</Button> */}
                </Card.Body>
                </Card>
            ))}
        </div>
        </main>
    )   
}

export default Resource; 