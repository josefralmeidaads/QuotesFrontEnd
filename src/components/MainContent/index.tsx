import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import GraphicsQuotes from '../GraphicsQuotes';
import Header from '../Header';

import { 
  Container,
  Card,
  HeaderContent,
  QuoteContent,
  QuoteSymbol,
  QuoteCompany,
  QuotelastestPrice,
  CompanySection,
  CompanySectionText,
  ContainerCompany,
  QuotePrice,
} from './styles';

import starIcon from '../../assets/star_icon.svg';
import companyIcon from '../../assets/icon_company.svg';
import groupIcon from '../../assets/group_icon.svg';
import CardCompany from '../CardCompany';


const MainContent: React.FC = () => {
  const [width, setWidth] = useState(0);
  const [heigth, setHeigth] = useState(0);
  
  useEffect(() => {
     const card = window.document.getElementById('Card');
     if(card){
      new ResizeObserver((card) => setWidth(card[0].contentRect.width)).observe(card)
      new ResizeObserver((card) => setHeigth(card[0].contentRect.height)).observe(card)
     }
  }, [])
  
  return (
    <Container>
      <Header title="Dashboard"/>
      <Card id="Card">
        <HeaderContent>
          <>
            <img src={starIcon} alt="estrela" />
            <QuoteContent>
              <QuoteSymbol>MSFT</QuoteSymbol>
              <QuoteCompany>Microsoft</QuoteCompany>
            </QuoteContent>
          </>
          <QuotelastestPrice>
            <QuotePrice>
              <img src={groupIcon} alt="group" />
              <p>$265,42</p>
            </QuotePrice>
            $-0.09(-0.03%)
          </QuotelastestPrice>
        </HeaderContent>
        <GraphicsQuotes width={width} heigth={heigth}/>
      </Card>

      <CompanySection>
        <CompanySectionText>
          <img src={companyIcon} alt="company" />
          Empresas recentes
        </CompanySectionText>
        
      </CompanySection>
      
      
      <ContainerCompany>
        <CardCompany />
        <CardCompany />
        <CardCompany />
        <CardCompany />
        <CardCompany />
        <CardCompany />
        <CardCompany />
        <CardCompany />
      </ContainerCompany>
    </Container>
  );
}

export default MainContent;