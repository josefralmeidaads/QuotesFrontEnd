import { Container } from './styles';

const CustomTooltip = ({ payload, active }: any) => {
  if (active) {
    return (
      <Container>
        <p>{`$${payload[0].value}`}</p>
      </Container>
    );
  }

  return null;
}

export default CustomTooltip;