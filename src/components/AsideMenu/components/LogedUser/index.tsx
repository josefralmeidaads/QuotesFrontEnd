import React from 'react';

import { Container } from './styles';

import avatar from '../../../../assets/avatar.svg';
import { IconButton } from '@material-ui/core';
import { ArrowDropDown } from '@material-ui/icons';

const LogedUser: React.FC = () => {
  return (
    <Container>
      <img src={avatar} alt="avatar" />
      Jose Francisco de Almeida Filho
      <IconButton>
        <ArrowDropDown 
          style={{ color: '#F06400' }}
          fontSize="large"
        />
      </IconButton>
    </Container>
  );
}

export default LogedUser;