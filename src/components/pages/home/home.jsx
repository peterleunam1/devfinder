import Logotype from "../../molecules/Logotype/logotype";
import Header from "../../organisms/header/header";
import "./home.scss";

export default function Home() {
  return (
    <main className="home">
      <span className="home__span">
        <Logotype />
      </span>
      <section className="banner">
        <h1 className="home__title">Find developers and get in contact!</h1>
        <p>
          Because teamwork is the key to building a new society and achieving
          success.
        </p>
        <Header />
      </section>
    </main>
  );
}
