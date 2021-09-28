import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';
import { lightPalette } from 'styles';

export const CloseIcon = styled(IoClose)``;
export const Button = styled.button`
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;

  ${CloseIcon} {
    width: 100%;
    height: 100%;
    color: ${lightPalette.themeSecondaryFont};
  }
`;
