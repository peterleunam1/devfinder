import { Link } from "wouter";
import Radio from "../../atoms/radio/radio";
import "./logotype.scss";

export default function Logotype() {
  return (
    <ul className="ul">
      <li className="ul__li">
        <Link to="/" className="li__strong">devfinder</Link>
      </li>
      <li className="ul__li ul__li__hidden">
        <h5>Hola</h5>
      </li>
    </ul>
  );
}
