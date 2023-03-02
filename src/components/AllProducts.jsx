import React from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { removeProductAcion } from '../actions/actions';
import Example from './Modal';

const AllProducts = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state)

    const deleteProduct = (id) => {
        dispatch(removeProductAcion(id))
    }

  return (
    <div className='all__products'>
        {
            products.length > 0 ? (
                products.map(item => {
                    return (
                        <Col className='m-3' key={item.id}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img 
                                    variant="top" 
                                    src={item.image} 

                                />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        {item.description}
                                    </Card.Text>
                                        <Example  item={item}/>    
                                        <Button 
                                            variant="danger"
                                            className='ms-2'
                                            onClick={() => deleteProduct(item.id)}    
                                        >
                                            Delete
                                        </Button>{' '}
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })
            ) : (null)
        }
    </div>
  )
}

export default AllProducts