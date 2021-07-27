import React from 'react';
import { IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';

import { 
  Container, 
  Content,
  ContentCompany,
  ContentCompanyText,
  ContentText,
} from './styles';
import twitterLogo from '../../assets/logo_twitter.svg';
import groupGreenIcon from '../../assets/group_green_icon.svg';

const CardFavoritesCompany: React.FC = () => {
  return (
  <>  
    <Container>
      <Content>
        <ContentCompany>
          <img src={twitterLogo} alt="logo" />
          <ContentCompanyText>
            TWTR <p>Twitter</p>
          </ContentCompanyText>
        </ContentCompany>

        <ContentText>
          +15.8%
          <img src={groupGreenIcon} alt="grafico verde" />
        </ContentText>
      </Content>
      <IconButton size="small">
        <Delete />
      </IconButton>
    </Container>
  </>
  );
}

export default CardFavoritesCompany;