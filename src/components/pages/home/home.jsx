import Logotype from "../../molecules/Logotype/logotype";
import Header from "../../organisms/header/header";
import './home.scss';

export default function Home() {
  return (
    <main className="home">
     <span className="home__span"> <Logotype/></span>
    <section className="banner">
    <h1 className="home__title">¡Encuentra a Devs y ponte en contacto!</h1>
     <p>Porque trabajar en equipo es la clave para construir una nueva sociedad y alcanzar el éxito.</p>
      <Header/>
    </section>
    </main>
  );
}