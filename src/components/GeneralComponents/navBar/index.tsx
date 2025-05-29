import { useNavigate } from "react-router-dom";
import StyledNavBar from "../../../styles/components/homePage/navBar";

const LateralNavBar = () => {
  const navigation = useNavigate();

  return (
    <StyledNavBar>
      <nav className="px-4 py-6">
        <ul className="space-y-1">
          <li>
            <a onClick={() => navigation("../ficha")}>
              <svg
                className="w-6 h-6 mr-3 text-black transition-transform duration-300 ease-in-out transform group-hover:text-black"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 7H16M8 12H16M8 17H12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-medium">Ficha</span>
            </a>
          </li>

          <li>
            <a onClick={() => navigation("../grimoire")}>
              <span className="book-backpack-span material-symbols-outlined">
                book
              </span>
              <span>Grimório</span>
            </a>
          </li>
          <li>
            <a onClick={() => navigation("../mochila")}>
              <span className="book-backpack-span material-symbols-outlined">
                backpack
              </span>
              <span>Mochila</span>
            </a>
          </li>
          <li>
            <a onClick={() => navigation("../habilidades")}>
              <svg
                className="skill-svg"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.343 17.657L3 21l3.343-3.343 2.829 2.829L21 9l-2.828-2.828L9 17.657l-2.657-2.657z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Habilidades</span>
            </a>
          </li>
        </ul>
      </nav>
    </StyledNavBar>
  );
};

export default LateralNavBar;
