import styled from 'styled-components';
import { fontSizeKit, lightPalette } from 'styles';

interface Props {
  $opacity: boolean;
}

export const P = styled.p<Props>`
  font-size: ${fontSizeKit.medium};
  color: ${lightPalette.themePrimaryFont};
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate3d(-50%, -50%, 0);
  opacity: ${props => (props.$opacity ? '1' : '0.5')};
`;
