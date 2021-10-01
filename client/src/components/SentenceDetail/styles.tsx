import styled from 'styled-components';
import { fontSizeKit, lightPalette } from 'styles';

export const Container = styled.div`
  min-height: calc(100vh - 135px);
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding: 0 8%;
  margin-top: 135px;

  p {
    font-size: ${fontSizeKit.medium};
    line-height: 3rem;
    white-space: pre-wrap;
    color: ${lightPalette.themePrimaryFont};
  }

  span {
    font-size: ${fontSizeKit.small};
    opacity: 0.7;
    font-style: italic;
    margin-top: 7rem;
    margin-bottom: 10rem;
  }
`;
