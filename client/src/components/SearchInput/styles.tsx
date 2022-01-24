import styled from 'styled-components';
import { IoCloseCircle } from 'react-icons/io5';

import { fontSizeKit, lightPalette } from 'styles';

interface Props {
  $text: number;
}

export const DeleteIcon = styled(IoCloseCircle)``;
export const Container = styled.div<Props>`
  position: relative;

  input {
    width: 100%;
    padding: 2rem 5rem 2rem 2rem;
    box-sizing: border-box;
    background: #fff;
    font-size: ${fontSizeKit.medium};
    box-shadow: 0 5px 20px rgba(50, 50, 50, 0.1), 0 2px 2px rgba(50, 50, 50, 0.1);
    border-radius: 5px;
    -webkit-border-radius: 5px;
    outline: none;
  }

  ${DeleteIcon} {
    width: 25px;
    height: 25px;
    color: ${lightPalette.themeSecondaryFont};
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 1.5rem;
    opacity: ${props => (props.$text > 0 ? '0.7' : '0')};
    cursor: pointer;
  }
`;
