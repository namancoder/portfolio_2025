"use client";
import { useState, useEffect, ReactNode } from "react";
import css from "./page.module.css";

import Image from "next/image";

enum Theme {
  LIGHT = "LIGHT",
  DARK = "DARK",
}
const Layout = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT); // Default theme is light

  useEffect(() => {
    // Check local storage for saved theme preference on component mount
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme as Theme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Save theme preference to localStorage
  };

  return (
    <div className={theme === Theme.LIGHT ? css.themeLight : css.themeDark}>
      <Image
        aria-hidden
        onClick={toggleTheme}
        className={css.themeToggle}
        alt='theme-toggle'
        width={30}
        height={30}
        src={theme === Theme.LIGHT ? "/light.svg" : "/dark.svg"}
      />
      {children}
    </div>
  );
};

export default Layout;
