import React from 'react';

import iconImg from '../../assets/icon_dashboard.svg';
import InputSearch from '../InputSearch';
import { 
  Container,
  PageTitle 
} from './styles';

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title }: HeaderProps) => {
  return (
    <Container>
      <PageTitle>
          <img src={iconImg} alt="logo" />
        <h1>
          {title}
        </h1>
      </PageTitle>
      <InputSearch label="Buscar empresa"/>
    </Container>
  );
}

export default Header;

Header.defaultProps = {
  title: ''
}