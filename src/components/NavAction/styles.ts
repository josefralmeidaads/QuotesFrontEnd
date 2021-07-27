import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 6%;
  height: 100vh;
  background-color: ${props => props.theme.colors.white};
  align-items: center;
  padding-top: 1rem;
`;

export const Logo = styled.img`
  width: 46px;
  height: 46px;
  margin-bottom: 3rem;
`;

export const ButtonImage = styled.img`
  width: 30px;
  height: 30px;
`;
