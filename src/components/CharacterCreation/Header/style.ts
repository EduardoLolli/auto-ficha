import styled from "styled-components";

export const StyledCCHeader = styled.header`
  .cc-title {
    font-size: 20px;
    margin: 0;
    padding: 7px 0 10px 0;
    text-align: center;
  }

  .cc-icon {
    position: absolute;
    padding: 0;
    margin: 0;
    background: none;
    border: none;
    border-radius: 10px;
    &:hover {
      cursor: pointer;
    }
    &:active {
      transform: scale(0.95);
      transition: transform 0.1s;
      background-color: rgba(0, 0, 0, 0.31);
    }

    @media (min-width: 751px) {
      display: none;
    }
  }
`;
