import styled from 'styled-components';
import { fontSizeKit, lightPalette } from 'styles';
import { FaBook } from 'react-icons/fa';

export const BookIcon = styled(FaBook)``;
export const Span = styled.span`
  font-size: ${fontSizeKit.small};
  color: ${lightPalette.themePrimaryFont};
  padding: 0 11%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  position: absolute;
  top: 160px;

  ${BookIcon} {
    color: ${lightPalette.themePrimaryFont};
    margin-right: 0.6rem;
  }
`;