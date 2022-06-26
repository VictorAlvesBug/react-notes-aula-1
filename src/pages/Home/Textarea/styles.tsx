import styled from 'styled-components';

export const TextareaStyled = styled.textarea`
  background-color: #f74a84;
  width: 100%;
  height: 100%;
  resize: none;
  padding: 10px;

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
`;
