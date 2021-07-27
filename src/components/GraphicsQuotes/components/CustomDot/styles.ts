import styled from 'styled-components';

export const CircleOut = styled.circle`
  stroke-width: 3px;
  stroke: ${props => props.theme.colors.primary};
  fill: white;
`;

export const CircleInside = styled.circle`
  fill: ${props => props.theme.colors.primary};
`;
