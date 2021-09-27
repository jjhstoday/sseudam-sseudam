import styled from 'styled-components';
import { lightPalette } from 'styles';

export const FooterContainer = styled.div`
  text-align: center;
  padding: 2rem;

  p {
    font-family: GowunBatang-Regular;
    color: ${lightPalette.themeSecondary};
    opacity: 0.5;
  }
`;
