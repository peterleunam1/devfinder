import Logotype from "../../molecules/Logotype/logotype";
import { Link, useLocation } from "wouter";
import { useState } from "react";
import "./header.scss";
import Button from "../../atoms/buttom/buttom";

export default function Header({ withLogotype }) {
  const [keyword, setkeyword] = useState("");
  const [error, setError] = useState(false);
  const [, pushLocation] = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword !== "") {
      pushLocation(`/users/${keyword}`);
    } else {
      setError(true);
    }
  };

  const handleChange = (e) => {
    setkeyword(e.target.value);
    setError(false);
  };

  return (
    <header className="header">
      {withLogotype && <Logotype />}
      <form
        className={error ? "header__form error" : "header__form"}
        onSubmit={handleSubmit}
      >
        <i className="fa-solid fa-magnifying-glass" />
        <input
          onChange={handleChange}
          className="header__input"
          type="text"
          placeholder="Search GitHub username..."
        />
        <Button text="search" />
      </form>
    </header>
  );
}
