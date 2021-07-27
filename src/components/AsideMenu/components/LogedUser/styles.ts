import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 90%;
  height: 60px;
  border: 1px solid ${props => props.theme.colors.primary};
  margin: 5% auto;
  border-radius: 2rem;
  color: ${props => props.theme.colors.primary};
  font-size: 1.2rem;
  font-family: 'GraphikSemiBold';
  align-items: center;
  justify-content: space-between;
  padding: 0 0.2rem;

  img {
    width: 50px;
    height: 50px;
  }
`;
