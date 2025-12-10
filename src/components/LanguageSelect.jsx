import { useNavigate } from "react-router-dom";
import "country-flag-icons/react/3x2";
import { RS, GB } from "country-flag-icons/react/3x2";

export default function LanguageSelect() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center max-w-lg mx-auto text-center bg-[#0D1B2A] opacity-80 rounded-2xl shadow-xl py-6 border border-gray-200 transition-all duration-500 hover:shadow-blue-100 hover:-translate-y-1">
      <h1 className="text-4xl mb-10 text-white">Welcome to WoodEscape House</h1>
      <h1 className="text-2xl mb-6 text-white">
        Izaberi jezik / Choose Language
      </h1>
      <div className="flex gap-12 py-2">
        <button
          onClick={() => navigate("/chat-sr")}
          className="hover:cursor-pointer"
        >
          <RS title="Serbia" className="w-8 h-6 ml-1" />
          <span className="text-white hover:text-gray-300">Srpski</span>
        </button>
        <button
          onClick={() => navigate("/chat-en")}
          className="hover:cursor-pointer "
        >
          <GB title="United Kingdom" className="w-8 h-6 ml-2" />
          <span className="text-white hover:text-gray-300">English</span>
        </button>
      </div>
    </div>
  );
}
