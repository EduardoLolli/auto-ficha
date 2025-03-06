import styled from "styled-components";

const StyledLoginForm = styled("div")`
  width: 100%;
  max-width: 480px;
  background-color: rgba(15, 23, 42, 0.8); /* Slate-900/80 */
  border-radius: 0.5rem; /* 8px */
  border: 1px solid rgba(245, 158, 11, 0.3); /* Amber-500/30 */
  box-shadow: 0 10px 25px rgba(168, 85, 247, 0.2); /* Purple-500/20 */
  overflow: hidden;

  @media (max-width: 1024px) {
    .login-form {
      max-width: 420px;
    }
  }

  .login-form-container {
    padding: 32px; /* 6 */
    @media (min-width: 640px) {
      .login-form-container {
        padding: 26px; /* 8 */
      }
    }
  }

  form > * + * {
    margin-top: 1rem; /* 4 */
  }

  @media (min-width: 640px) {
    form > * + * {
      margin-top: 1.5rem; /* 6 */
    }
  }
`;
export default StyledLoginForm;
