import styled from 'styled-components';
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from 'react-icons/io';
import { lightPalette } from 'styles';

export const OffRadioIcon = styled(IoMdRadioButtonOff)`
  width: 20px;
  height: 20px;
  color: ${lightPalette.themeSecondary};
  opacity: 0.4;
  flex-shrink: 0;
  cursor: pointer;
`;
export const OnRadioIcon = styled(IoMdRadioButtonOn)`
  width: 20px;
  height: 20px;
  color: ${lightPalette.themeSecondary};
  opacity: 0.6;
  flex-shrink: 0;
  cursor: pointer;
`;
