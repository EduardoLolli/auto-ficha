interface ILoginFormButton{
buttonText: string
}

const LoginFormButton = ({...props}: ILoginFormButton) => {
  return (
    <button
      type="submit"
      className="w-full py-2.5 sm:py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-slate-900 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 hover:shadow-lg"
    >
      <strong>{props.buttonText}</strong>
    </button>
  );
};
export default LoginFormButton;
