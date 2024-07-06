import styled from 'styled-components';
import { size } from './Sizes';

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
  gap: ${({ gap }) => gap || size.XXS};
  padding: ${({ padding }) => padding || size.XXS};
`;

export default GridWrapper;
