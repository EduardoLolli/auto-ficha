import StyledFooter from "../../../styles/components/homePage/styledFooter";

const HomeFooter = () => {
  return (
    <StyledFooter>
      <div>
        <p className="text-sm">Auto-ficha RPG v0.0.1</p>
      </div>
      <div className="footer-container">
        <button>Suporte</button>
        <button>Comunidade</button>
        <button>Fórum</button>
      </div>
    </StyledFooter>
  );
};

export default HomeFooter;
