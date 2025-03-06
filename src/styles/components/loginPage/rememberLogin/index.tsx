import styled from "styled-components";

const StyledRememberLogin = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 0.75rem; /* Equivalente ao space-y-3 */

  /* Estilos para telas pequenas (sm) e superiores */
  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 0; /* Remove o espaçamento vertical */
  }

  input {
    height: 1rem; /* h-4 */
    width: 1rem; /* w-4 */
    border-radius: 0.25rem; /* rounded */
    border: 1px solid #475569; /* border-slate-600 */
    background-color: #334155; /* bg-slate-700 */
    color: #f59e0b; /* text-amber-500 */
    outline: none; /* Remove o outline padrão do navegador */
  }

  /* Efeito de foco */
  input:focus {
    box-shadow: 0 0 0 4px rgba(245, 158, 11, 0.5); /* focus:ring-amber-500/50 */
  }

  label {
    margin-left: 0.5rem; /* ml-2 */
    display: block; /* block */
    font-size: 0.75rem; /* text-xs */

    /* Estilos para telas pequenas (sm) e superiores */
    @media (min-width: 640px) {
      font-size: 0.875rem; /* text-sm */
    }

    color: #bfdbfe; /* text-blue-200 */
  }

  a {
    font-size: 0.75rem; /* text-xs */
    color: #fbbf24; /* text-amber-400 */
    transition: color 0.2s ease-in-out; /* transition-colors duration-200 */
    text-decoration: none; /* Remove sublinhado padrão */
  }

  /* Estilos para telas pequenas (sm) e superiores */
  @media (min-width: 640px) {
    a {
      font-size: 0.875rem; /* text-sm */
    }
  }

  /* Estilos ao passar o mouse */
  a:hover {
    color: #fcd34d; /* text-amber-300 */
    text-decoration: underline; /* hover:underline */
  }
`;

export default StyledRememberLogin;
