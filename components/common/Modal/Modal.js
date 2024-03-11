import React from 'react';
import styled from 'styled-components';

const Modal = ({
  showModal,
  setShowModal,
  children
}) => (
  <ModalBackdrop className={showModal && 'toggled'}>
    <ModalContent className={showModal && 'toggled'}>
      <CloseModalButton onClick={() => setShowModal(false)}>
        <img src="https://flaticons.net/icon.php?slug_category=mobile-application&slug_icon=close" alt="close" />
      </CloseModalButton>
      {children}
    </ModalContent>
  </ModalBackdrop>
);

const ModalBackdrop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 10;
  background: rgba(0, 0, 0, 0);
  opacity: 0;
  transition: all 0.3s ease-in-out;
  pointer-events: none;

  &.toggled {
    background: rgba(0, 0, 0, 0.5);
    opacity: 1;
    pointer-events: all;
  }
`;

const ModalContent = styled.div`
  transform: translateY(100%);
  transition: all 0.3s ease-in-out;
  position: relative;

  &.toggled {
    transform: translateY(0);
  }
`;

const CloseModalButton = styled.button`
  position: absolute;
  right: -10px;
  top: -10px;
  height: 25px;
  width: 25px;
  border-radius: 100px;
  padding: 6px;
  background: #9F85F7;
  border: 0;
  outline: 0;
  cursor: pointer;

  &:hover {
    transform: unset;
  }

  img {
    height: 100%;
    width: 100%!important;
    object-fit: contain;
  }
`;

export default Modal;
