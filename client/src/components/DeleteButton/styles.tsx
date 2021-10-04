import styled from 'styled-components';
import { AiOutlineDelete } from 'react-icons/ai';
import { lightPalette } from 'styles';

export const DeleteBookIcon = styled(AiOutlineDelete)``;
export const Button = styled.button`
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  position: fixed;
  top: 47px;
  z-index: 3;
  right: 8%;
  cursor: pointer;

  ${DeleteBookIcon} {
    width: 100%;
    height: 100%;
    color: ${lightPalette.themeSecondaryFont};
  }
`;
