import StyledFooter from "../../../styles/components/styledFooter";

const HomeFooter = () => {
  return (
    
      <StyledFooter>
        <p>Auto Ficha RPG System &copy; 2025 - All rights reserved</p>
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
      </StyledFooter>
  );
};

export default HomeFooter;
