import { useState } from "react";
import "./radio.scss";


export default function Radio() {
  const [theme, setTheme] = useState("switch");
 
  return (
    <article className="theme">
      <button
        className={theme}
        onClick={() =>
          setTheme(theme === " switch active" ? "switch" : " switch active")
        }
      >
        <span>
          <i className="fas fa-sun"></i>
        </span>
        <span>
          <i className="fas fa-moon"></i>
        </span>
      </button>
    </article>
  );
}
