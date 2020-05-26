import { keyframes } from 'styled-components';
import { COLORS } from './constants';

export const backgroundColorChange = keyframes`
  from {
    background:${COLORS.mainBackground}
  }
  to {
    background:${COLORS.title}
  }
`;
