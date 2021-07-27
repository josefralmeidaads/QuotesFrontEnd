import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2.5rem;
  svg {
    color: #666;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 1rem;
  }
`;

export const Content = styled.li`
  width: 100%;
  height: 74px;
  box-shadow: 0px 1px 20px 0px rgba(50, 50, 50, 0.2), 0px 1px 20px 0px rgba(50, 50, 50, 0.2);
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  border-radius: 0.5rem;
`;

export const ContentCompany = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-right: 1rem;
  }
`

export const ContentCompanyText = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'GraphikBlack';

  p{
    font-family: 'GraphikRegular';
    color: #666;
  }
`;

export const ContentText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.success};
  font-family: 'GraphikSemiBold';

  img {
    margin-left: 0.5rem;
  }
`;
