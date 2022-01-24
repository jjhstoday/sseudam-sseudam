import styled from 'styled-components';

import { fontSizeKit } from 'styles';

export const Ul = styled.ul`
  margin-top: 5rem;

  li {
    display: flex;
    flex-flow: row nowrap;
    padding: 3rem 0;
    border-bottom: 1px solid rgba(116, 89, 47, 0.2);
    overflow: hidden;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    &:first-child {
      border-top: 1px solid rgba(116, 89, 47, 0.2);
    }

    img {
      width: 80px;
      height: 120px;
    }

    div {
      display: flex;
      flex-flow: column;
      margin-left: 2rem;
      justify-content: center;
      min-width: 230px;
      flex-grow: 1;

      span {
        font-size: ${fontSizeKit.small};
        opacity: 0.5;
        margin-bottom: 0.8rem;
      }

      p {
        display: block;
        width: 95%;
        font-size: ${fontSizeKit.medium};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        & + span {
          margin-top: 1.8rem;
        }
      }
    }
  }
`;
