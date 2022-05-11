import { Route } from "wouter";
import { useState, useEffect } from "react";
import Searched from "./components/pages/search/search";
import Home from "./components/pages/home/home";
import Radio from "./components/atoms/radio/radio";
import "./app.scss";


function App() {
  const [theme, setTheme] = useState("isDark");

  useEffect(() => {
    setTheme(JSON.parse(localStorage.getItem("theme")));
  }, []);
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    console.log("Saving in localStorage");
  }, [theme]);

  return (
    <div className={theme}>
      <div
        onClick={() => {
          setTheme(theme === "isDark" ? "isLight" : "isDark");
        }}
      >
        <Radio />
      </div>
      <Route path="/" component={Home} />
      <Route path="/users/:keyword" component={Searched} />
    </div>
  );
}

export default App;
