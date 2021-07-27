import styled from 'styled-components';

export const Container = styled.div`
  width: 65%;
  height: 100vh;
  background-color: #E9E9E9;
  border-radius: 1rem 0rem 0rem 1rem;
  box-shadow: 0px 4px 10px 0px rgba(50, 50, 50, 0.75), 0px 4px 10px 0px rgba(50, 50, 50, 0.75);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 20%;
  margin-bottom: -7rem;
  justify-content: space-between;
`;

export const QuoteContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 0.5rem;
`;

export const QuoteSymbol = styled.div`
 font-family: 'GraphikBlack';
`;

export const QuoteCompany = styled.div`
  font-family: 'GraphikRegular';
  color: #666;
`;

export const QuotelastestPrice = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'GraphikRegular';
  color: ${props => props.theme.colors.danger};
  padding-right: 2rem;
`;

export const QuotePrice = styled.div`
  display: flex;
  width: 100%;
  font-family: 'GraphikBlack';
  color: #000;
  justify-content: flex-end;
  img {
    margin-right: 0.5rem;
  }
`;

export const Card = styled.div`
  display: flex;
  padding: 0 1rem;
  margin: 3%;
  height: 50vh;
  background-color: ${props => props.theme.colors.white};
  border-radius: 1rem;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  box-shadow: 0px 1px 5px 0px rgba(50, 50, 50, 0.2), 0px 1px 5px 0px rgba(50, 50, 50, 0.2);
`;

export const CompanySection = styled.div`
  margin: 0 3%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'GraphikBlack';
  font-size: 1.2rem;
  img {
    margin-right: 0.5rem;
  }
`;

export const CompanySectionText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'GraphikBlack';
  font-size: 1.2rem;
  img {
    margin-right: 0.5rem;
  }
`;

export const ContainerCompany = styled.ul`
  display: flex;
  flex-wrap: nowrap; 
  overflow: auto;
  margin: 1% 3%;
  height: 20vh;
  white-space: nowrap;
  
`;





