"use client";

import { setTheme } from "@/store/themeSlice";
import { Check } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ThemeSettings() {
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="bg-base-100 p-4 md:p-6 lg:p-8 rounded-2xl mt-3">
      <div className="p-4 md:p-6">
        <h2 className="text-lg md:text-xl font-semibold mb-1">Theme</h2>
        <p className="text-base-content/60 text-xs md:text-sm mb-3 md:mb-4">
          Choose your theme
        </p>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 lg:gap-6 relative">
          {["light", "dark"].map((mode) => (
            <div
              key={mode}
              onClick={() => dispatch(setTheme(mode))}
              className={`relative flex-1 min-w-[150px] border rounded-lg md:rounded-xl p-3 md:p-4 cursor-pointer transition-all ${
                theme === mode
                  ? "border-primary bg-primary/10"
                  : "border-base-300 hover:border-primary"
              }`}
            >
              <div
                className={`w-full h-16 sm:h-20 md:h-24 rounded mb-2 ${
                  mode === "dark" ? "bg-gray-800" : "bg-gray-100"
                }`}
              ></div>
              <p className="text-center capitalize text-sm md:text-base">
                {mode}
              </p>
              {theme === mode && (
                <div className="absolute bg-base-100 p-1 rounded-full top-1.5 right-1.5 md:top-2 md:right-2 text-green-600 text-lg font-bold shadow">
                  <Check className="size-4 md:size-5" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
