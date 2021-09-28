import styled from 'styled-components';
import { lightPalette } from 'styles';

export const FooterContainer = styled.div`
  text-align: center;
  padding-bottom: 3rem;

  p {
    font-family: GowunBatang-Regular;
    color: ${lightPalette.themeSecondary};
    opacity: 0.5;
  }
`;
