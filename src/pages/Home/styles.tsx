import styled from 'styled-components';

export const Container = styled.section`
  height: fit-content;
  padding: 30px;
  flex: 1;

  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  align-items: flex-start;

  > .list-notes {
    width: 100%;
    display: grid;
    gap: 10px;
    transition: all .3s;
    
    grid-template-columns: 1fr;
    
    @media (min-width: 400px) {
      grid-template-columns: 1fr 1fr;
    }
    
    @media (min-width: 600px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;
