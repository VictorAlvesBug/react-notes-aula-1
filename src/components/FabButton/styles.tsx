import styled from "styled-components";

export const FabButtonStyled = styled.button`
  position: absolute;
  right: 5px;
  bottom: 5px;
  color: white;

  background-color: transparent;
  color: var(--primary);
  font-size: 28px;
  font-weight: bold;
  
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: 0px;
  
  box-shadow: 2px 4px 4px #0009,
              inset 1px 1px 4px #ffffff55;
  transition: 0.2s;
  cursor: pointer;
  
  :hover {
    font-weight: normal;
    color: var(--white);
    background-color: #ed145b;
    box-shadow: 2px 10px 10px #0009,
                inset 2px 2px 5px #ffffff55;
    // !!! implementar animação 
    transform: scale(1.5) translate(-15px, -15px);
  }
`;
