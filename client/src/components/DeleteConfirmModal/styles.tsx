import styled from 'styled-components';
import { fontSizeKit, fontWeightKit, lightPalette } from 'styles';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 5;

  div {
    background: ${lightPalette.themePrimary};
    padding-top: 4rem;
    padding-bottom: 3rem;
    width: 85%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);

    p {
      font-size: ${fontSizeKit.medium};
      font-weight: ${fontWeightKit.bold};
      margin-bottom: 1rem;
      color: ${lightPalette.themeSecondary};
    }

    span {
      font-size: ${fontSizeKit.small};
      margin-bottom: 3rem;
      opacity: 0.7;
    }

    div {
      flex-flow: row;
      padding: 0;
      justify-content: space-around;
      width: 70%;
      box-shadow: none;

      button {
        width: 50%;
        padding: 1rem;
        font-size: ${fontSizeKit.medium};
        border-radius: 10px;
        border: 1px solid ${lightPalette.themeSecondary};
        background: transparent;
        color: ${lightPalette.themeSecondary};

        &:last-child {
          margin-left: 1rem;
        }
      }
    }
  }
`;
