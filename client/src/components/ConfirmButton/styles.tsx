import styled from 'styled-components';
import { FiCheck } from 'react-icons/fi';
import { lightPalette } from 'styles';

interface Props {
  $readyToSubmit: boolean;
}
export const ConfirmIcon = styled(FiCheck)``;
export const Button = styled.button<Props>`
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  position: fixed;
  top: 47px;
  z-index: 3;
  right: 8%;
  cursor: ${props => (props.$readyToSubmit ? 'pointer' : 'not-allowed;')};

  ${ConfirmIcon} {
    width: 100%;
    height: 100%;
    color: ${lightPalette.themeSecondaryFont};
    opacity: ${props => (props.$readyToSubmit ? '1' : '0.2')};
  }
`;
