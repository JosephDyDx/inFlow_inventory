import React from 'react'
import "./Modal.css"
import success from '../assets/success.png'

const UploadProductSuccess = ({closeModal}) => {
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <div className='body'>
                <img src={success}/>
                <p>Product successfully Uploaded</p>
            </div>
            <div className='footer'>
                <button onClick={() => closeModal(false)} className='btn ghost'>Ok</button>
            </div>
        </div>
    </div>
  )
}

export default UploadProductSuccess