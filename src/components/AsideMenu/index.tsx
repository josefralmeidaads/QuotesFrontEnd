import { Star } from '@material-ui/icons';
import React from 'react';
import CardFavoritesCompany from '../CardFavoritesCompany';

import LogedUser from './components/LogedUser';
import { 
  Container, 
  SectionCompanyFavorites,
  ListFavoritesCompany,
} from './styles';

const AsideMenu: React.FC = () => {
  return (
    <Container>
      <LogedUser />
      
      <SectionCompanyFavorites>
        <Star/>
        Empresas favoritas
      </SectionCompanyFavorites>

      <ListFavoritesCompany>
        <CardFavoritesCompany />
        <CardFavoritesCompany />
      </ListFavoritesCompany>
    </Container>
  );
}

export default AsideMenu;