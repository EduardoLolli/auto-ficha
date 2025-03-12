
import StyledNavigationOption from "../../styles/components/NavigationOption";
interface INavigationOptionProps {
  icon: string;
  title: string;
  onClick: () => void;
}

const NavigationOption = ({ icon, onClick, title }: INavigationOptionProps) => {
  return (
    <StyledNavigationOption>
      <button className="group" onClick={onClick}>
        <span className="material-symbols-outlined icon-span">{icon}</span>
        <span>{title}</span>
      </button>
    </StyledNavigationOption>
  );
};
export default NavigationOption;
