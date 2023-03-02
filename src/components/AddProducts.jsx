import React, { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addProductAcion } from '../actions/actions';

const AddProducts = () => {
    const dispatch = useDispatch()
    const inputRef = useRef(null)
    const inputImgRef = useRef(null)
    const inputDesc = useRef(null)

    const addProduct = (e) => {
        e.preventDefault()
        let formdata = new FormData()
        formdata.append("img", "inputImgRef.current.value")
        console.log(formdata);

        dispatch(addProductAcion({
            id: uuidv4(),
            name: inputRef.current.value,
            description: inputDesc.current.value,
            image: inputImgRef.current.value
        }))
        inputRef.current.value = ""
        inputDesc.current.value = ""
    }

  return (
    <div className='container py-3'>
        <div className='row'>
            <h3 className='text-center text-info'>Add Products Section</h3>
            <form 
                onSubmit={addProduct} 
                className='form-control py-3 d-flex'
            >
                <input 
                    type="text"
                    className='form-control'
                    ref={inputRef}
                    placeholder='Name'
                />
                <input 
                    type="text"
                    className='form-control'
                    ref={inputDesc}
                    placeholder='Description'
                />
                <input 
                    type="file" 
                    className='form-control'
                    ref={inputImgRef}
                />
                <button className='btn btn-info'>Add</button>
            </form>
        </div>
    </div>
  )
}

export default AddProducts