import React from 'react'
import "./Modal.css"

const LogOut = ({closeModal}) => {
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <div className='title'>
                <h1>Wanna Log Out?</h1>
            </div>
            <div className='body'>
                <p>You will be logged out immediately</p>
            </div>
            <div className='footer'>
                <button onClick={() => closeModal(false)} className='btn btn-full'>Cancel</button>
                <button className='btn  btn-ghost'>Log Out</button>
            </div>
        </div>
    </div>
  )
}

export default LogOut;