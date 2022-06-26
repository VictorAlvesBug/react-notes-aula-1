import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const showInCard = keyframes`
  0% {
    transform: scale(0.2) translate(100vw, 100vh); 
  }

  50% {
    transform: scale(0.5); 
  }

  100% {
    transform: scale(1);
  }
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9;
  overflow: hidden;

  background-color: #0009;

  animation: ${fadeIn} .2s;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.section`
  width: 300px;
  height: 300px;
  padding: 20px;

  z-index: 19;

  overflow-y: auto;

  animation: ${showInCard} .4s;

  background-color: var(--primary);
  box-shadow: 0px 0px 10px black;
  border-radius: 4px;

  position: relative;

  display: flex;
  flex-direction: column;
  gap: 10px;

  > span {
    position: absolute;
    top: 15px;
    right: 20px;

    font-size: 30px;

    cursor: pointer;
    transition: 0.2s;

    :hover {
      text-shadow: 0px 4px 10px var(--bgPrimary);
      transform: scale(1.2);
    }

    :active {
      transform: scale(0.95);
    }
  }

  > header {
    font-weight: bold;
    font-size: 24px;
    text-align: center;
    margin: 0px 20px;
  }

  > div {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
