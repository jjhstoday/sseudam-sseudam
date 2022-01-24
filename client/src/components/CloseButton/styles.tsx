import styled from 'styled-components';
import { IoCloseOutline } from 'react-icons/io5';

import { lightPalette } from 'styles';

export const CloseIcon = styled(IoCloseOutline)``;
export const Button = styled.button`
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  position: fixed;
  top: 47px;
  z-index: 3;
  left: 8%;
  cursor: pointer;

  ${CloseIcon} {
    width: 100%;
    height: 100%;
    color: ${lightPalette.themeSecondaryFont};
  }
`;
