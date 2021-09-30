import styled from 'styled-components';
import { GiFeather } from 'react-icons/gi';
import { lightPalette } from 'styles';

interface Props {
  $color: string;
}
export const PlusIcon = styled(GiFeather)``;
export const IconContainer = styled.div<Props>`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  padding: 17px;
  box-shadow: 0px 0px 8px ${props => props.$color};
  background: ${props => props.$color};
  position: fixed;
  z-index: 1;
  bottom: 7%;
  left: 50%;
  transform: translateX(-50%);

  ${PlusIcon} {
    width: 100%;
    height: 100%;
    color: ${lightPalette.themePrimary};
  }
`;
