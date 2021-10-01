import styled from 'styled-components';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { lightPalette } from 'styles';

export const UpdateIcon = styled(HiOutlinePencilAlt)``;
export const Button = styled.button`
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  position: fixed;
  top: 47px;
  z-index: 3;
  right: 20%;

  ${UpdateIcon} {
    width: 100%;
    height: 100%;
    color: ${lightPalette.themeSecondaryFont};
  }
`;
