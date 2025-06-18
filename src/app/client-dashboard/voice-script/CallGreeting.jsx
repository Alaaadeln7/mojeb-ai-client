"use client";
import { voices } from "@/constants/index.js";
import { useSpeakMutation } from "@/store/api/chatbotApiSlice";
import { Loader, Play } from "lucide-react";
import { useState } from "react";

export default function CallGreeting() {
  const [text, setText] = useState("");
  const [lang, setLang] = useState("ar-XA");
  const [voice, setVoice] = useState("ar-XA-Standard-A");
  const [speak, { isLoading }] = useSpeakMutation();

  const handlePlay = async () => {
    if (!text) return;

    try {
      const blob = await speak({
        text,
        languageCode: lang,
        voiceName: voice,
      }).unwrap();

      const audioUrl = URL.createObjectURL(blob);
      const audio = new Audio(audioUrl);
      audio.play();
    } catch (error) {
      console.error("Error playing audio:", error);
    }
  };

  return (
    <section className="border border-base-300 p-6 rounded-2xl bg-base-100 shadow-lg  mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6 text-primary">Call Greeting</h1>

      <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 items-center border border-base-300 p-4 rounded-2xl bg-base-200">
        <div className="w-full md:flex-1">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="input input-bordered w-full focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Write your greeting to test the voice"
          />
        </div>

        <div className="flex flex-col space-y-2 w-full md:w-auto">
          <label className="text-sm font-medium text-base-content">
            Language
          </label>
          <select
            value={lang}
            onChange={(e) => {
              const selectedLang = e.target.value;
              setLang(selectedLang);
              setVoice(voices[selectedLang][0]);
            }}
            className="select select-bordered w-full md:w-40"
          >
            {Object.keys(voices).map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col space-y-2 w-full md:w-auto">
          <label className="text-sm font-medium text-base-content">Voice</label>
          <select
            value={voice}
            onChange={(e) => setVoice(e.target.value)}
            className="select select-bordered w-full md:w-48"
          >
            {voices[lang].map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handlePlay}
          disabled={isLoading || !text}
          className="btn btn-primary btn-circle w-12 h-12 flex-shrink-0"
          aria-label="Play greeting"
        >
          {isLoading ? (
            <Loader className="size-5 animate-spin" />
          ) : (
            <Play className="size-5" />
          )}
        </button>
      </div>

      <div className="mt-4 text-sm text-base-content/70">
        <p>Select language and voice, then type your greeting to test it.</p>
      </div>
    </section>
  );
}
