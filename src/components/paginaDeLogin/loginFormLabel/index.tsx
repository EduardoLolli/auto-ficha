import StyledLoginFormLabel from "../../../styles/components/loginPage/loginFormLabel";

interface ILoginFormLabel {
  labelName: string;
  placeH: string;
  tipo: string;
  inputId: string;
  children: React.ReactNode;
}

const LoginFormLabel = ({ children, ...props }: ILoginFormLabel) => {
  return (
    <StyledLoginFormLabel>
      <div>
        <label>{props.labelName}</label>

        <div className="relative">
          <div className="svg-div">
            <svg viewBox="0 0 20 20" fill="currentColor">
              {children}
            </svg>
          </div>
          <input
            id={props.inputId}
            type={props.tipo}
            placeholder={props.placeH}
          />
        </div>
      </div>
    </StyledLoginFormLabel>
  );
};

export default LoginFormLabel;
