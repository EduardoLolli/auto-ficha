import styled from "styled-components";

const StyledHeader = styled("header")`
  background-color: rgb(23, 37, 85);
  backdrop-filter: blur(4px);
  border-bottom: 1px solid #334155;

  .header-container {
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }

.header-title-div{
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

  .header-title {
    color: #fff;
    font-weight: 600;
    font-size: 1.5rem;
  }

  .header-flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    white-space: nowrap;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    font-weight: 500;
    outline: none;
    transition-property: color, background-color;
    transition-duration: 0.2s;

    background-color: transparent;
    color: #d1d5db;

    height: 2.25rem;
    border-radius: 0.375rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;

    color: #d1d5db;
    transition: color 0.2s, background-color 0.2s;

    &:hover {
      background-color: #1e3a8a; /* accent */
      color: #f1f5f9; /* accent-foreground */
    }
  }

  .button-span {
    display: none;
    margin-left: 0.5rem;

    @media (min-width: 640px) {
      display: inline;
    }
  }

  .header-options {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .icons {
    height: 1rem;
    width: 1rem;
  }
`;

export default StyledHeader;
