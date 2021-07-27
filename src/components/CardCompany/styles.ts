import styled from 'styled-components';

export const Container = styled.li`
  background-color: ${props => props.theme.colors.white};
  margin-right: 1rem;
  width: 299px;
  height: 73px;
  flex: 0 0 auto;
  list-style: none;
  margin-top: 1rem;
  transition: box-shadow 0.3s;
  border-radius: 0.5rem;

  &:hover {
    box-shadow: 0px 1px 20px 0px rgba(50, 50, 50, 0.2), 0px 1px 20px 0px rgba(50, 50, 50, 0.2);
  }
`;

export const ContentCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 1rem;
`;

export const ContentCardCompany = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img + img {
    margin-left: 0.5rem;
  }
`;

export const ContentCardCompanyText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-family: 'GraphikBlack';
  p {
    color: #666;
  }
  margin-left: 0.5rem;
`;

export const ContentCardCompanyPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'GraphikBlack';
  color: ${props => props.theme.colors.success};
  img {
    margin-left: 0.5rem;
  }
`;
