import "./style.css";
import StyledHomePage from "../../styles/components/homePage";
import HomeMain from "../../components/GeneralComponents/homeMain";
import HomeFooter from "../../components/GeneralComponents/homeFooter";
import GenericHeader from "../../components/GeneralComponents/homeHeader";

const HomePage = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledHomePage id="webcrumbs">
      <GenericHeader></GenericHeader>

      <HomeMain>{children}</HomeMain>

      <HomeFooter></HomeFooter>
    </StyledHomePage>
  );
};

export default HomePage;
