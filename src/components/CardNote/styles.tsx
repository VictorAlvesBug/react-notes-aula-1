import styled, { keyframes } from 'styled-components';

const cardAnimation = keyframes`
  from {
    opacity: 0;
    transform: scale(0) rotate(180deg);
  }

  to {
    opacity: 1;
  }
`;

export const Container = styled.article`
  height: 200px;
  padding: 10px;
  position: relative;

  color: var(--white);
  background-color: var(--primary);
  box-shadow: 2px 2px 10px #00000099;

  animation: ${cardAnimation} 300ms;

  p:nth-child(1) {
    font-size: 14px;
    margin-bottom: 10px;
    color: var(--gray);
  }

  p:nth-child(2) {
    overflow-y: scroll;
    height: 120px;
    background: #f74a84;
    padding: 5px;

    ::-webkit-scrollbar {
      width: 14px;
    }

    ::-webkit-scrollbar-track {
      background: #f74a84;
      border-radius: 7px;
    }

    ::-webkit-scrollbar-thumb {
      background: #ed145b;
      border-radius: 7px;
      border: 1px solid #f74a84;
    }
  }

  .material-icons {
    position: absolute;
    bottom: 5px;
    right: 5px;

    font-size: 32px;
    cursor: pointer;
    transition: 0.3s;
  }

  .material-icons:not(#priority):hover {
    color: #333;
    transform: scale(1.1);
    transform: rotate(360deg);
  }

  #priority {
    position: absolute;
    bottom: 5px;
    left: 5px;
    width: fit-content;
  }
`;
