import { useState } from "react";
import { askApartmentAI } from "../api/openai";
import { apartmentInfoEn } from "../data/apartmentInfoEn";

export default function ChatEn() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    const aiReply = await askApartmentAI(input, apartmentInfoEn);
    const assistantMessage = { role: "assistant", text: aiReply };
    setMessages((prev) => [...prev, assistantMessage]);
  };

  return (
    <div className="max-w-lg mt-5 mb-5 mx-auto bg-[#0D1B2A]/80 rounded-2xl shadow-xl p-6 border border-gray-200 transition-all duration-500 hover:shadow-blue-100 hover:-translate-y-1">
      <h1 className="text-center text-3xl font-bold mb-4 text-white tracking-wide">
        WoodEscape House
      </h1>
      <h1 className="text-center text-3xl font-bold mb-4 text-white tracking-wide">
        AI Assistant
      </h1>

      <div
        style={{ backgroundImage: "url('/we7h.jpeg')" }}
        className="relative h-100 overflow-y-auto p-4 border border-gray-300 rounded-lg bg-cover bg-center"
      >
        {messages.length > 0 ? (
          <div className="relative z-10 bg-[#0D1B2A]/90 rounded-lg p-2">
            {messages.map((m, i) => (
              <p
                key={i}
                className={`my-2 text-sm leading-relaxed ${
                  m.role === "user"
                    ? "text-blue-200 text-right"
                    : "text-white text-left"
                }`}
              >
                <b>{m.role === "user" ? "Guest:" : "Assistant:"}</b> {m.text}
              </p>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="flex mt-4 gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="How can I help you?"
          className="flex-grow border border-gray-300 rounded-lg p-2 text-gray-900 bg-white focus:ring-2 focus:ring-white focus:outline-none transition-all"
        />
        <button
          onClick={sendMessage}
          className="bg-gray-200 text-[#000000] px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-gray-300 hover:shadow-lg active:scale-95 transition-all duration-200"
        >
          Send
        </button>
      </div>
    </div>
  );
}
