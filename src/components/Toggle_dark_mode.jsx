import React,{useState} from "react";
import moon from "/images/icon-moon.svg";
import sun from "/images/icon-sun.svg";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"; 
export default function Toggle_dark_mode() {
  const [icon, setIcon] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? sun : moon
  );
  /*configuarndo el modo noche */
  const preferColorScheme = window.matchMedia("(prefers-color-scheme: dark)")
    .matches
    ? "dark"
    : "light";
  console.log(preferColorScheme);

  const setTheme = (theme) => {
    console.log(theme);

    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };

  setTheme(localStorage.getItem("theme") || preferColorScheme);

  function switchTheme() {
    let switchToTheme =
      localStorage.getItem("theme") === "dark" ? "light" : "dark";
    setTheme(switchToTheme);
    setIcon(switchToTheme === "dark" ? sun : moon);
  }

  return (
    <motion.div
      onClick={() => {
        switchTheme();
      }}
      className={`w-15 rounded-full p-1  flex  inset-shadow-sm inset-shadow-neutral-500 hover:cursor-pointer transition-all delay-200 bg-custom-fm-toggle-dark md:w-[50px] lg:w-[50px] ${
        localStorage.getItem("theme") === "dark"
          ? "justify-end bg-fm-green"
          : "justify-start "
      } `}
    >
      <motion.button
        type="button"
        className="bg-neutral-50 rounded-full p-1 shadow-md shadow-neutral-400 hover:cursor-pointer"
        layout
      >
        <img src={icon} className="size-5" alt="" />{" "}
      </motion.button>
    </motion.div>
  );
}
