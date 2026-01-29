import { useNavigate } from "react-router-dom";

export default function LanguageSelect() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center max-w-lg mx-auto text-center bg-[#0D1B2A] opacity-80 rounded-2xl shadow-xl py-6 border border-gray-200 transition-all duration-500 hover:shadow-blue-100 hover:-translate-y-1">
      <h1 className="text-4xl mb-10 text-white">Welcome to WoodEscape House</h1>
      <div className="flex gap-12 py-2">
        <button
          onClick={() => navigate("/chat")}
          className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-white to-gray-400 px-6 py-3 font-semibold text-black shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none"
        >
          <span>Chat with AI Assistant</span>

          {/* arrow / chat cue */}
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            💬
          </span>
        </button>
      </div>
      <p className="mt-3 text-sm text-gray-300">
        Available 24/7 • Answers in your language
      </p>
    </div>
  );
}
