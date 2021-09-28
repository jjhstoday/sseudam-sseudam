import styled from 'styled-components';
import { fontSizeKit, lightPalette } from 'styles';

export const HeaderContainer = styled.div`
  text-align: center;
  padding-top: 2rem;

  a {
    font-size: ${fontSizeKit.large};
    font-family: GowunBatang-Regular;
  }

  div {
    margin-top: 2rem;
    height: 1px;
    background-image: linear-gradient(
      to right,
      ${lightPalette.themePrimary},
      ${lightPalette.themeSecondaryFont},
      ${lightPalette.themePrimary}
    );
  }
`;