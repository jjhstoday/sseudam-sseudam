import styled from 'styled-components';

import { lightPalette } from 'styles';

export const FooterContainer = styled.footer`
  text-align: center;
  padding-bottom: 3rem;
  max-width: 600px;

  p {
    font-family: GowunBatang-Regular;
    color: ${lightPalette.themeSecondary};
    opacity: 0.5;
  }
`;
