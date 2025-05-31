"use client";

import { setTheme } from "@/store/themeSlice";
import { Check } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Notifications from "./Notifications";
import LangSettings from "./LangSettings";

export default function SettingsTheme() {
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen flex items-start justify-center bg-base-200 p-10">
      <div className="bg-base-100 rounded-xl w-full max-w-3xl shadow-md">
        {/* Theme */}
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-1">Theme</h2>
          <p className="text-base-content/60 text-sm mb-4">Choose your theme</p>
          <div className="flex flex-wrap gap-6 relative">
            {["light", "dark"].map((mode) => (
              <div
                key={mode}
                onClick={() => dispatch(setTheme(mode))}
                className={`relative flex-1 border rounded-xl p-4 cursor-pointer transition ${
                  theme === mode
                    ? "border-primary bg-primary/10"
                    : "border-base-300 hover:border-primary"
                }`}
              >
                <div
                  className={`w-full h-20 rounded mb-2 ${
                    mode === "dark" ? "bg-gray-800" : "bg-gray-100"
                  }`}
                ></div>
                <p className="text-center capitalize">{mode}</p>
                {theme === mode && (
                  <div className="absolute bg-base-100 p-1 rounded-full top-2 right-2 text-green-600 text-lg font-bold shadow">
                    <Check className="size-5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <LangSettings />
        {/* Notifications */}
        <Notifications />
      </div>
    </div>
  );
}
