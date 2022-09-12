import React, { useEffect } from 'react';
import { ReactPortal } from '../../HOC';

type ModalProps = {
  children: JSX.Element,
  isOpen: boolean,
  handleClose: any
}

const Modal = ({children, isOpen, handleClose}: ModalProps) => {
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) => e.key === 'Escape' ? handleClose() : null;
    document.body.addEventListener('keydown', closeOnEscapeKey);

    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [handleClose]);

  if (!isOpen) return null;

  return (
    <>
      <ReactPortal wrapperId="react-portal-backdrop">
        <div className='h-screen w-screen absolute bg-black bg-opacity-50' />
      </ReactPortal>
      <ReactPortal wrapperId="react-portal-modal">
        <div className='w-32 h-32'>
          <button onClick={handleClose}
            className="close-btn">
        Close
          </button>
          <div className='modal-content'>
            {children}
          </div>
        </div>
      </ReactPortal>    
    </>
  );
};

export default Modal;