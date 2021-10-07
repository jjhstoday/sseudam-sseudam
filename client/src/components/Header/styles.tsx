import styled from 'styled-components';
import { lightPalette } from 'styles';

export const InnerContainer = styled.div``;
export const Divider = styled.div``;
export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: ${lightPalette.themePrimary};
  width: 100vw;
  z-index: 3;
  max-width: 600px;

  h2 {
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 135px;
    line-height: 4rem;
    font-size: 2.5rem;
    font-family: designhouseOTFLight00;
    margin: 0 auto;
    word-break: keep-all;
    width: 60%;
  }

  ${Divider} {
    height: 1px;
    background-image: linear-gradient(
      to right,
      ${lightPalette.themePrimary},
      ${lightPalette.themeSecondaryFont},
      ${lightPalette.themePrimary}
    );
  }
`;
