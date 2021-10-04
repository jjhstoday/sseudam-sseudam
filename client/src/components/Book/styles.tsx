import styled from 'styled-components';

export const Li = styled.li`
  width: 25%;
  height: 120px;
  margin: 0 1rem;
  margin-bottom: 7rem;
  display: flex;
  justify-content: center;

  &:nth-child(3n + 1) {
    position: relative;

    &::after {
      content: '';
      width: 100vw;
      height: 2px;
      display: block;
      position: absolute;
      bottom: -0.2rem;
      left: -10px;
      z-index: 1;
      background: gray;
      box-shadow: 0px 3px 5px black;
      opacity: 0.7;
    }
  }

  img {
    width: 80px;
    height: 100%;
    box-shadow: 2px 2px 5px gray;
  }
`;
