import React from 'react'
import "./Modal.css"

const UploadProduct = ({closeModal}) => {
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <div className='title'>
                <h1>Upload Product?</h1>
            </div>
            <div className='body'>
                <p>By clicking on the Submit button, this product will be available on the list of inventory items on the dashboard</p>
            </div>
            <div className='footer'>
                <button onClick={() => closeModal(false)} className='btn btn-full'>Edit</button>
                <button className='btn  btn-ghost'>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default UploadProduct;