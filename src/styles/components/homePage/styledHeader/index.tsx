import styled from "styled-components";

const StyledHeader = styled("header")`
position: relative;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem; /* 8 * 0.25rem (padrão do Tailwind) */
`;

export default StyledHeader;
