import styled from 'styled-components';
import { fontSizeKit, lightPalette } from 'styles';

export const P = styled.p`
  font-size: ${fontSizeKit.medium};
  color: ${lightPalette.themePrimaryFont};
  margin-top: 100px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;

  img {
    width: 30px;
    height: 30px;
    margin-left: 0.2rem;
  }
`;
