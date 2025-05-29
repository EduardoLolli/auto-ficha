import CharacterCard from "./CharacterCard";
import GenericHeader from "../GeneralComponents/homeHeader/index";
import { CharacterSelectionContainer } from "./styled";

const CharacterSelection = () => {
  // const navigate = useNavigate();

  // const handleLogout = () => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     localStorage.removeItem("token");
  //     localStorage.removeItem("userId");
  //     localStorage.removeItem("userName");
  //     navigate("/login");
  //   }
  // };

  return (
    <CharacterSelectionContainer className="">
      <GenericHeader />

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Select Your Character
        </h2>
        <p className="text-center text-gray-300 mb-8">
          Choose your hero or create a new legend to begin your adventure
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Character Card 1 */}
          <CharacterCard />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
        <button className="flex items-center justify-center gap-3 bg-gradient-to-r from-primary-600 to-primary-500 px-8 py-4 rounded-xl shadow-lg hover:shadow-primary-500/40 transition-all transform hover:-translate-y-1 font-bold text-lg">
          <span className="material-symbols-outlined">add_circle</span>
          Create New Character
        </button>
        <button className="flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-purple-500 px-8 py-4 rounded-xl shadow-lg hover:shadow-purple-500/40 transition-all transform hover:-translate-y-1 font-bold text-lg">
          <span className="material-symbols-outlined">file_upload</span>
          Import Character
        </button>
        <button className="flex items-center justify-center gap-3 bg-gradient-to-r from-gray-700 to-gray-600 px-8 py-4 rounded-xl shadow-lg hover:shadow-gray-600/40 transition-all transform hover:-translate-y-1 font-bold text-lg">
          <span className="material-symbols-outlined">logout</span>
          Exit Game
        </button>
      </div>

      <footer className="mt-16 text-center text-gray-400 text-sm">
        <p>Mythic Quest RPG System &copy; 2023 - All rights reserved</p>
        <div className="flex justify-center gap-4 mt-4">
          <button className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary-600 transition-all">
            <i className="fa-brands fa-discord"></i>
          </button>
          <button className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary-600 transition-all">
            <i className="fa-brands fa-reddit-alien"></i>
          </button>
          <button className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary-600 transition-all">
            <i className="fa-brands fa-twitter"></i>
          </button>
        </div>
        {/* Next: "Add privacy policy and terms of service links" */}
      </footer>
    </CharacterSelectionContainer>
  );
};

export default CharacterSelection;
