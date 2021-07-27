import React from 'react';

import { 
  Container,
  ContentCard,
  ContentCardCompany,
  ContentCardCompanyText,
  ContentCardCompanyPrice, 
} from './styles';

import groupGreen from '../../assets/group_green_icon.svg';
import startIcon from '../../assets/star_icon.svg';
import fbIcon from '../../assets/fb_icon.svg';

const CardCompany: React.FC = () => {
  return (
    <Container>
      <ContentCard>
        <ContentCardCompany>
            <img src={startIcon} alt="star" />
            <img src={fbIcon} alt="logo facebook" />
          <ContentCardCompanyText>
            FB
            <p>Facebook</p>
          </ContentCardCompanyText>
        </ContentCardCompany>

        <ContentCardCompanyPrice>
          +2.3%
          <img src={groupGreen} alt="group" />
        </ContentCardCompanyPrice>
      </ContentCard>
    </Container>
  );
}

export default CardCompany;