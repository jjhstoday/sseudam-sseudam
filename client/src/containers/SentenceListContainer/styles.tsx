import styled from 'styled-components';
import { fontSizeKit, lightPalette } from 'styles';

export const Ul = styled.ul`
  margin-top: 20rem;
  display: flex;
  flex-flow: column wrap;
  padding: 0 8%;
`;

export const P = styled.p`
  font-size: ${fontSizeKit.medium};
  color: ${lightPalette.themePrimaryFont};
  padding-top: 23vh;
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
