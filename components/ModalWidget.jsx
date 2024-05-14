'use client'

import {useState} from 'react'

import Modal from './Modal'

export default function ModalWidget({children, btnText}) {
    const [showModal, setShowModal] = useState(false);
  
    return (
        <div>
          <button onClick={() => setShowModal(true)}>{btnText ? 'Lets Talk' : 'Open Modal'}</button>
          {showModal &&
              <div onClose={() => setShowModal(false)}>
                  {children}
              </div>
          }
        </div>
    )
  }