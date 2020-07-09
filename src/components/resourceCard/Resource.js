import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import './styles.css';
// import resourceData from './../resourceData';
import Form from 'react-bootstrap/Form';
// import AuthContext from './../../context/auth-context';
import FormControl from 'react-bootstrap/FormControl';
import Spinner from 'react-bootstrap/Spinner'

const Resource = () => {
    // const [data, setData] = useState(resourceData);
    const [resources, setResources] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchResources = () => {
      setLoading(true);
      const requestBody = {
        query: `
            query {
              resources {
                title
                subtitle
                text
                link
                tags
              }
            }
        `
      };
  
      fetch('https://reactvault-api.herokuapp.com/graphql', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => {
          if (res.status !== 200 && res.status !== 201) {
            throw new Error('Failed!');
          }
          return res.json();
        })
        .then(resData => {
          const resources = resData.data.resources;
          setResources(resources);
          setLoading(false);
        })
        .catch(err => {
          console.log(err);
          setLoading(false);
        });
    };

    useEffect(() => {
      fetchResources();
    });

    const excludeColumns = ["link"];

    const handleChange = value => {
        setSearchText(value);
        filterData(value);
      };

    const filterData = (value) => {
        const lowercasedValue = value.toLowerCase().trim();
        if (lowercasedValue === "") setResources();
        else {
          const filteredData = resources.filter(item => {
            return Object.keys(item).some(key =>
              excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowercasedValue)
            );
          });
          setResources(filteredData);
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
            onChange={e => handleChange(e.target.value)} 
            />
        </Form>
      
        <div className='resource-list'>
        {!loading ? (<Spinner animation="border" role="status"/>) : 
            resources.map((tile) => (
            <Card className='card' key={tile.link}>
                <Card.Body>
                    <Card.Title>{tile.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">by: {tile.subtitle}</Card.Subtitle>
                        <Card.Text>{tile.text}</Card.Text>
                    <Card.Link className='card-link' href={tile.link}>Learn more</Card.Link>
                </Card.Body>
                </Card>
            ))}
        </div>
        </main>
    )   
}

export default Resource; 