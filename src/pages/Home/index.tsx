import React from 'react';

import AsideMenu from '../../components/AsideMenu';
import MainContent from '../../components/MainContent';
import NavAction from '../../components/NavAction';

import { 
  Container
} from './styles';

const Home: React.FC = () => {
  return (
  <Container>
    <NavAction />
    <MainContent />
    <AsideMenu />
  </Container>
  );
}

export default Home;