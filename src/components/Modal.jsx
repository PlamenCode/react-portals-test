import React from 'react'

export default function Modal({ setShowModal }) {
  return (
    <div className='modal'>
      <div className="modal-content">
        <button className="close-btn" 
          onClick={() => setShowModal(false)}
        >&times;</button>
        <h2>Modal</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut quas quae, placeat
           iusto, esse est, ea mollitia reprehenderit provident repellat minima autem. 
           Ut quisquam voluptas adipisci possimus corrupti architecto commodi.
        </p>
      </div>
    </div>
  )
}
