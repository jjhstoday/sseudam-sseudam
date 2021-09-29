import styled from 'styled-components';
import { lightPalette } from 'styles';

export const InnerContainer = styled.div``;
export const Divider = styled.div``;
export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: ${lightPalette.themePrimary};
  width: 100vw;
  z-index: 1;

  div {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    height: 135px;
  }

  span {
    font-size: 2.5rem;
    font-family: designhouseOTFLight00;
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
