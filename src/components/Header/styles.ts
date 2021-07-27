import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 20vh;
`;

export const PageTitle = styled.div`
  display: flex;
  width: 100%;
  height: 10vh;
  align-items: center;
  padding: 2.5rem 2rem;

  h1 {
    font-size: 1.5rem;
    font-family: 'GraphikBlack';
    margin-left: 0.5rem;
    letter-spacing: 0.5px;
  }
`;
