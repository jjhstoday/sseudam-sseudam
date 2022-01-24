import styled from 'styled-components';

import { fontSizeKit } from 'styles';

export const Textarea = styled.textarea`
  margin-top: 20rem;
  padding: 0 8%;
  margin-bottom: 8%;
  outline: none;
  resize: none;
  width: 100%;
  min-height: 60vh;
  font-size: ${fontSizeKit.medium};
  line-height: 3rem;
  opacity: 0.7;
  /* text-align: start; */
  /* text-align: center; */
  /* text-align: end; */
`;
