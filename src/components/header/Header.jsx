import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export const Header = () => {
  const [showText, setShowText] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowText(scrollY >= 306);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-[95%] top-0 sticky justify-between mx-auto p-2 h-[64px] flex items-center md:w-[732px]">
      <div>
        {showText && (
          <div className="font-bold">
            <h1>Fernando</h1>
          </div>
        )}
      </div>
      <div>
        {theme === "dark" ? (
          <FaMoon
          className="w-[18px] h-full text-right cursor-pointer opacity-100"
          onClick={handleChangeTheme}
          />
          ) : (
          <FaSun
            className="w-[24px] text-eggplant-color h-full text-right cursor-pointer opacity-100"
            onClick={handleChangeTheme}
          />
        )}
      </div>
    </div>
  );
};
