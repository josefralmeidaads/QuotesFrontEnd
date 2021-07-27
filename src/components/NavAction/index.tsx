import React from 'react';

import { 
  ButtonImage,
  Container, 
  Logo,

} from './styles';

import logoImg from '../../assets/monetus_logo.png';
import homeImg from '../../assets/button_home.png';

import { Box, IconButton } from '@material-ui/core';
import { useState } from 'react';
import Selector from './components/selector';


const NavAction: React.FC = () => {
  const [selected, setSelected] = useState(false);

  const onSelected = () => {
    setSelected(!selected);
    console.log('selected ->', selected)
  }
  return (
    <Container>
      <Logo src={logoImg}/>

      <Box 
        display="flex" 
        justifyContent="center" 
        width="100%"
        position="relative"
      >
        {selected && <Selector opacity={selected ? 100 : 0}/>}
        <IconButton onClick={onSelected}>
          <ButtonImage src={homeImg}/>
        </IconButton>
      </Box>
    </Container>
  );
}

export default NavAction;