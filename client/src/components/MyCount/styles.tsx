import styled from 'styled-components';
import { FaBook } from 'react-icons/fa';
import { ImHeart } from 'react-icons/im';

import { fontSizeKit, lightPalette } from 'styles';

export const BookIcon = styled(FaBook)``;
export const HeartIcon = styled(ImHeart)``;
export const Span = styled.span`
  font-size: ${fontSizeKit.small};
  color: ${lightPalette.themePrimaryFont};
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: start;
  position: absolute;
  top: 160px;
  left: 8%;

  ${BookIcon}, ${HeartIcon} {
    color: ${lightPalette.themePrimaryFont};
    margin-right: 0.6rem;
  }
`;
