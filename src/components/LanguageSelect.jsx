import { useNavigate } from "react-router-dom";

export default function LanguageSelect() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center max-w-lg mx-auto text-center bg-[#0D1B2A] opacity-80 rounded-2xl shadow-xl py-6 border border-gray-200 transition-all duration-500 hover:shadow-blue-100 hover:-translate-y-1">
      <h1 className="text-4xl mb-10 text-white">Welcome to WoodEscape House</h1>
      <div className="flex gap-12 py-2">
        <button
          onClick={() => navigate("/chat")}
          className="hover:cursor-pointer"
        >
          <span className="text-white hover:text-gray-300">
            Ask the AI ​Assistant
          </span>
        </button>
      </div>
    </div>
  );
}
