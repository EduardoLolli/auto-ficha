import "./style.css";
import HomeHeader from "../../components/homeComponents/homeHeader";
import HomeMain from "../../components/homeComponents/homeMain";
// import { ReactNode } from "react";
import HomeFooter from "../../components/homeComponents/homeFooter";

const HomePage = (
// { children }: { children: ReactNode }
) => {
  return (
    <body id="webcrumbs">
      <div className="HomePage-container">
        <HomeHeader></HomeHeader>

        <div className="flex">
          {/* <LateralNavBar /> */}
          <HomeMain></HomeMain>
        </div>

        <HomeFooter></HomeFooter>
      </div>
    </body>
  );
};

export default HomePage;
