import styled from "styled-components";

export const StyledCard = styled.div`
  border-radius: 12px;

  .title-container {
    background: #1e3162;
    color: #fff;
    border-radius: 12px 12px 0 0;
    padding: 24px;
    display: flex;
    .title-icon {
      margin-right: 8px;
      height: 20px;
    }
    .title {
      line-height: 24px;
      margin: 0;
      font-size: 24px;
    }
  }

  .children-container {
    padding: 16px;
    background: #fbfcfe;
    border-radius: 0 0 12px 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    &:hover {
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
    }
  }
`;
