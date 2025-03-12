import "./style.css";
import HomeHeader from "../../components/homeComponents/homeHeader";
import HomeFooter from "../../components/homeComponents/homeFooter";
import StyledHomePage from "../../styles/components/homePage";
import HomeMain from "../../components/homeComponents/homeMain";

const HomePage = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledHomePage id="webcrumbs">
      <HomeHeader></HomeHeader>

      <HomeMain>{children}</HomeMain>

      <HomeFooter></HomeFooter>
    </StyledHomePage>
  );
};

export default HomePage;
