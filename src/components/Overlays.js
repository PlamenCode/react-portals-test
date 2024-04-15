import React from 'react';
import { createPortal } from 'react-dom';
import Modal from './Modal';

const mountElement = document.getElementById('overlays');

export default function Overlays({ showModal, setShowModal }) {
  return (
    createPortal(
        <>
            {showModal && <Modal setShowModal={setShowModal} />}
        </>,
        mountElement
    )
  )
}
