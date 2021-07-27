import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 2rem;
  position: relative;
`;

export const InputSearchText = styled.input`
 width: 40%;
 border-radius: 0.5rem;
 border: 1px solid #D9D9D9;
 height: 3rem;
 padding: 1rem;
 font-family: 'GraphikSemibold';
 font-size: 1rem;
 outline: none;
 color: #75758B;
`;

export const ButtonSearch = styled.button`
  background-color: ${props => props.theme.colors.primary};
  border-radius: 0.5rem;
  width: 3rem;
  height: 3rem;
  border: 0;
  margin-left: -1rem;
  transition: filter 0.4s;
  box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.64);

  &:hover {
    filter: brightness(0.7);
  }
`;

