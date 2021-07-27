import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 29%;
  height: 100vh;
  background-color: ${props => props.theme.colors.white};
`;

export const SectionCompanyFavorites = styled.section`
  display: flex;
  align-items: center;
  width: 90%;
  height: 10vh;
  margin: 0 auto;

  svg {
    margin-right: 0.5rem;
    color: ${props => props.theme.colors.primary};
  }

  font-family: 'GraphikBlack';
  color: #000;
  font-size: 1.2rem;
`;

export const ListFavoritesCompany = styled.ul`
  display: flex;
  width: 90%;
  flex-direction: column;
  margin: 0 auto;
`;
