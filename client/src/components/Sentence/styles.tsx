import styled from 'styled-components';
import { fontSizeKit, lightPalette } from 'styles';
import { GiPaperClip } from 'react-icons/gi';

export const ClipIcon = styled(GiPaperClip)``;
export const Li = styled.li`
  border: 1px solid ${lightPalette.themePrimaryFont};
  margin-bottom: 4rem;
  position: relative;
  background: #f7f5f3;

  p {
    font-size: ${fontSizeKit.medium};
    color: ${lightPalette.themePrimaryFont};
    line-height: 2.5rem;
    white-space: pre-wrap;
    padding: 3rem 2rem;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 10px;
    left: 10%;
    width: 90%;
    height: 50px;
    background: rgba(0, 0, 0, 0.3);
    transform: skewY(5deg);
    transform-origin: left;
    z-index: -1;
    filter: blur(2px);
  }

  ${ClipIcon} {
    position: absolute;
    top: -12px;
    z-index: 2;
    left: 0px;
    width: 33px;
    height: 33px;
    color: ${lightPalette.themePrimaryFont};
    transform: rotate(-45deg);
  }
`;
