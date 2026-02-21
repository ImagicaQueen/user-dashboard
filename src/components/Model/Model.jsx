import React from 'react'
import "./Model.css"

const Model = ({ open, handleClose, user }) => {
  if (!open || !user) return null;

  return (
    <div className='overlay'>
      <div className='modal'>
        <div><strong>Phone:</strong> {user.phone}</div>
        <div><strong>Website:</strong> {user.website}</div>
        <div>
          <strong>Full Address:</strong> 
          {`${user.address.street}, ${user.address.suite}, ${user.address.city}`}
        </div>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  )
}
export default Model
