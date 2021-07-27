import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.colors.primary};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  color: ${props => props.theme.colors.white};
  font-family: 'GraphikRegular';
`;
