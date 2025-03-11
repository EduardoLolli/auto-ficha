import "./style.css";
import HomeHeader from "../../components/homeComponents/homeHeader";
import HomeFooter from "../../components/homeComponents/homeFooter";
import StyledHomePage from "../../styles/components/homePage";
import HomeMain from "../../components/homeComponents/homeMain";

const HomePage = () =>
// { children }: { children: ReactNode }

{

  return (
    <StyledHomePage id="webcrumbs">
      <HomeHeader></HomeHeader>

      <HomeMain></HomeMain>

      <HomeFooter></HomeFooter>
    </StyledHomePage>
  );
};

export default HomePage;
