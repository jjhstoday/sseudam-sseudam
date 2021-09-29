import styled from 'styled-components';
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from 'react-icons/io';
import { lightPalette } from 'styles';

export const OffRadioIcon = styled(IoMdRadioButtonOff)`
  width: 20px;
  height: 20px;
  color: ${lightPalette.themeSecondaryFont};
  opacity: 0.6;
`;
export const OnRadioIcon = styled(IoMdRadioButtonOn)`
  width: 20px;
  height: 20px;
  color: ${lightPalette.themeSecondaryFont};
  opacity: 0.6;
`;
