import styled from "styled-components";

const StyledLoginPage = styled("div")`
  @import url(https://fonts.googleapis.com/css2?family=Lato&display=swap);
  @import url(https://fonts.googleapis.com/css2?family=Open+Sans&display=swap);

  .login-page-container {
    width: 100%;
    height: 100vh;

    /* Original */

    /* background: linear-gradient(
      var(--gradient-direction, to right),
      #4a148c,
      #1e3a8a,
      #312e81
    );  */

    /* Mistério e magia sombria */

    /* background: linear-gradient(
      var(--gradient-direction, to right),
      #3b0764,
      #1e293b,
      #0f172a
    ); */

    /* Aventura e exploração */

    /* background: linear-gradient(
        var(--gradient-direction, to right),
        #2f5233,
        #8b5e3c,
        #b8860b
      ); */

    /* Infernal e demoníaco */

    background: linear-gradient(
      var(--gradient-direction, to right),
      #7f1d1d,
      #b91c1c,
      #a78501
    );

    /* Reino celestial */

    /* background: linear-gradient(
      var(--gradient-direction, to right),
      #4c1d95,
      #9333ea,
      #a78501
    ); */

    /*Futurista e arcano */

    /* background: linear-gradient(
      var(--gradient-direction, to right),
      #0f172a,
      #2563eb,
      #9333ea
    ); */

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    font-family: sans-serif;
    position: relative;
    overflow: hidden;
    @media (min-width: 640px) {
      padding: 24px;
    }
    @media (min-width: 768px) {
      padding: 32px;
    }
    @media (min-width: 1024px) {
    }
  }
`;

export default StyledLoginPage;
