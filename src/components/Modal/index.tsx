import React from "react";
import { ModalContainer, Overlay } from "./styles";

interface ModalProps {
  title: string,
  children: React.ReactNode,
  handleClose: ()  => void,
  style?: React.CSSProperties,
  isOpen?: boolean;
}

function Modal({ title, children, handleClose, isOpen, ...rest }: ModalProps) {
  if(isOpen){
    return (
      <Overlay>
        <ModalContainer {...rest}>
          <header>{title}</header>
          <span onClick={handleClose}>&times;</span>
          <div>
            {children}
          </div>
        </ModalContainer>
      </Overlay>
    );
  }
  
  return <></>;
}

export default Modal;
