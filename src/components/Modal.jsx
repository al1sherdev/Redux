import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { editProductAcion } from '../actions/actions';

function Example({ item }) {
  const [show, setShow] = useState(false);
  const editRef = useRef(null)
  const inputDesc = useRef(null)
  const dispatch = useDispatch()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

//   Edit Product
  const editProduct = (id) => {
    handleClose()
    dispatch(editProductAcion(
        {
            id: id, 
            name: editRef.current.value, 
            description: inputDesc.current.value
        }
    ))
    
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal
        className='text-light d-flex'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Change Product Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <label>Change Name</label>
          <textarea className='w-100 fs-5 text-light' ref={editRef} name="" id="" cols="2" rows="1"></textarea>
          <label>Change description</label>
          <textarea className='w-100 fs-5 text-light' ref={inputDesc} name="" id="" cols="2" rows="2"></textarea>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => editProduct(item.id)} >Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;