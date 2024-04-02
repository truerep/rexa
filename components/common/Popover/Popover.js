import React from 'react';
import styled from 'styled-components';

const Popover = ({
  showModal,
  setShowModal,
  children
}) => (
  <ModalBackdrop className={showModal && 'toggled'}>
    <ModalContent className={showModal && 'toggled'}>
      <CloseModalButton onClick={() => setShowModal(false)}>
        <img src="/assets/icons/close-icon-dark.svg" alt="close" />
      </CloseModalButton>
      {children}
    </ModalContent>
  </ModalBackdrop>
);

const ModalBackdrop = styled.div`
  display: flex;
  align-items: end;
  // justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
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
  background: #fff;
  width: 100%;
  height: 100%;

  &.toggled {
    transform: translateY(0);
  }
`;

const CloseModalButton = styled.button`
  position: absolute;
  right: 25px;
  top: 25px;
  height: 27px;
  width: 27px;
  border-radius: 100px;
  padding: 6px;
  border: 0;
  outline: 0;
  cursor: pointer;
  z-index: 11;

  &:hover {
    transform: unset;
  }

  img {
    height: 100%;
    width: 100%!important;
    object-fit: contain;
  }
`;

export default Popover;
