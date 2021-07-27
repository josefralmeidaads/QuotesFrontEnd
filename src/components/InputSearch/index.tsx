import React from 'react';

import { 
  Container,
  InputSearchText,
  ButtonSearch, 
} from './styles';

import finderIcon from '../../assets/finder.svg';

interface InputSearchProps {
  label?: string;
}

const InputSearch: React.FC<InputSearchProps> = ({ label }: InputSearchProps) => {
  return (
    <Container>
      <InputSearchText placeholder={label} />
      <ButtonSearch>
        <img src={finderIcon} alt="lupa" />
      </ButtonSearch>
    </Container>
  );
}

export default InputSearch;

InputSearch.defaultProps = {
  label: 'Digite o texto'
}