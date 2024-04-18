import React, { useContext } from 'react';
import { createPortal } from 'react-dom';
import Modal from './Modal';
import { ModalContext } from '../context/ModalContext';

const mountElement = document.getElementById('overlays');

export default function Overlays() {
  const modal = useContext(ModalContext);
  return (
    createPortal(
        <>
            {modal.showModal && <Modal />}
        </>,
        mountElement
    )
  )
}
