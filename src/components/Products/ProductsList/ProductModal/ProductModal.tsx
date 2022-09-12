import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Modal } from '../../../UI/Modal';

type ProductModalProps = {
  isOpen: boolean
}

const ProductModal = () => {
  console.log('hi from product modal');
  return (
    <>
      <Modal handleClose={() => {console.log('hi from modal');}}
        isOpen={true}>
        <div></div>
      </Modal>
    </>
  );

};

export default ProductModal;