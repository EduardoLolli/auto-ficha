import styled from "styled-components";

const StyledLoginFormFooter = styled("div")`
  margin-top: 1.5rem; /* mt-6 */
  text-align: center; /* text-center */

  /* Estilos para telas pequenas (sm) e superiores */
  @media (min-width: 640px) {
    margin-top: 2rem; /* mt-8 */
  }

  p {
    font-size: 0.75rem; /* text-xs */
    color: rgba(191, 219, 254, 0.8); /* text-blue-200/80 */
  }

  /* Estilos para telas pequenas (sm) e superiores */
  @media (min-width: 640px) {
    p {
      font-size: 0.875rem; /* text-sm */
    }
  }

  a {
    margin-left: 0.25rem; /* ml-1 */
    color: #fbbf24; /* text-amber-400 */
    font-size: inherit; /* Mantém o tamanho de fonte padrão */
    transition: color 0.2s ease-in-out; /* transition-colors duration-200 */
    text-decoration: none; /* Remove sublinhado padrão */
  }

  /* Estilos ao passar o mouse */
  a:hover {
    color: #fcd34d; /* text-amber-300 */
    text-decoration: underline; /* hover:underline */
  }
`;

export default StyledLoginFormFooter;
