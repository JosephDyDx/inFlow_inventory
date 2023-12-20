import React from 'react'
import "./Modal.css"

const DeleteProduct = ({closeModal}) => {
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <div className='title'>
                <h1>delete Product?</h1>
            </div>
            <div className='body'>
                <p>deleting this product will make it unavailable</p>
            </div>
            <div className='footer'>
                <button onClick={() => closeModal(false)} className='btn btn-full'>Cancel</button>
                <button className='btn  btn-ghost'>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default DeleteProduct;