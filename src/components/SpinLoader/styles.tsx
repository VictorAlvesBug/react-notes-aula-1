import styled, { keyframes } from 'styled-components';

const spin = keyframes`
0% {
    transform: translate(-50%, -50%) rotate(0deg);
}
100% {
    transform: translate(-50%, -50%) rotate(360deg);
}
`;

export const SpinLoaderStyled = styled.span`
  width: 40px;
  height: 40px;
  border: 6px solid #ed145b;
  border-top-color: transparent;
  border-bottom-color: transparent;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  animation: ${spin} 0.8s linear infinite;
`;
