import StyledHeader from "../../../styles/components/styledHeader";

const HomeHeader = () => {
  return (
    <StyledHeader>
      <div className="flex items-center">
        <svg
          className="w-12 h-12 mr-4 text-amber-500 transform hover:rotate-12 transition-transform duration-300"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2L4 6v12l8 4 8-4V6l-8-4zm6 15.5l-6 3-6-3V6.5l6-3 6 3v11z" />
          <path d="M12 6.5l-4 2v5l4 2 4-2v-5l-4-2zm2 6.3l-2 1-2-1V9.2l2-1 2 1v3.6z" />
        </svg>
        <h1 className="text-4xl font-bold tracking-wider text-white hover:text-amber-400 transition-colors duration-300">
          AUTO-FICHA
        </h1>
      </div>
      <div className="flex items-center space-x-6">
        <button className="text-white hover:text-amber-400 transition-colors duration-300 transform hover:scale-110">
          <span className="material-symbols-outlined text-3xl">settings</span>
        </button>
        <button className="text-white hover:text-amber-400 transition-colors duration-300 transform hover:scale-110">
          <span className="material-symbols-outlined text-3xl">help</span>
        </button>
        <button className="text-white hover:text-amber-400 transition-colors duration-300 transform hover:scale-110">
          <span className="material-symbols-outlined text-3xl">logout</span>
        </button>
      </div>
    </StyledHeader>
  );
};

export default HomeHeader;
