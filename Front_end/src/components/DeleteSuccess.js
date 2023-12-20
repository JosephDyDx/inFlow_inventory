import React from 'react'
import "./Modal.css"

const DeleteSuccess = ({closeModal}) => {
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <div className='title'>
                <h1>Product Deleted!</h1>
            </div>
            <div className='body'>
                <p>You can always go back to the “product upload&update pages
 to add a new product</p>
            </div>
            <div className='footer'>
                <button onClick={() => closeModal(false)} className='btn btn-ghost'>OK</button>
            </div>
        </div>
    </div>
  )
}

export default DeleteSuccess;