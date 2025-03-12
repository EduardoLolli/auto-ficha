import NavigationNav from "../navigationNav";
import NavigationOption from "../navigationOption";
import { useNavigate } from "react-router-dom";
import NavigationContainer from "../navigationContainer";

const CharacterNavigation = () => {
  const navigation = useNavigate();
  return (
    <NavigationContainer>
      <NavigationNav>
        <NavigationOption
          icon="description"
          onClick={() => {
            navigation("/biografia");
          }}
          title="Biografia"
        />
        <NavigationOption
          icon="person"
          onClick={() => {
            navigation("/ficha");
          }}
          title="Ficha"
        />
        <NavigationOption
          icon="backpack"
          onClick={() => {
            navigation("/mochila");
          }}
          title="Mochila"
        />
        <NavigationOption
          icon="auto_fix_high"
          onClick={() => {
            navigation("/grimoire");
          }}
          title="Feitiços"
        />
        <NavigationOption
          icon="fitness_center"
          onClick={() => {
            navigation("/skills");
          }}
          title="Habilidades"
        />
      </NavigationNav>
    </NavigationContainer>
  );
};
export default CharacterNavigation;
