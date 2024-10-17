import React from "react";
import "./assets/styles/_global.scss";
import styles from "./styles.module.scss";
import imgSeason1 from "./assets/img/Rick_y_morty-S1.webp";
import imgSeason2 from "./assets/img/Rick_y_morty-S2.webp";
import imgSeason3 from "./assets/img/Rick_y_morty-S3.webp";
import Characters from "./Characters";


const App = () => {
  const home = {
    name: "Rick and Morty",
    path: "#",
  };

  const characters = {
    id: 1,
    name: "Personajes",
    path: "personajes",
  };

  const locations = {
    id: 2,
    name: "Lugares",
    path: "lugares",
  };

  const episodes = {
    id: 3,
    name: "Episodios",
    path: "episodios",
  };

  const MENU_HEADERS = [characters, locations, episodes];

  const SEASONS_IMAGES = [
    {
      id: 1,
      name: "Rick and Morty - Season 1",
      src: imgSeason1,
    },
    {
      id: 2,
      name: "Rick and Morty - Season 2",
      src: imgSeason2,
    },
    {
      id: 3,
      name: "Rick and Morty - Season 3",
      src: imgSeason3,
    },
  ];

  return (
    <div>
      <header>
        <nav className={styles.containerMenu}>
          <h1>
            <a className="mainTitle" href={home.path}>
              {home.name}
            </a>
          </h1>
          <ul
            className={`${styles.mainMenu} border`}
            aria-label="main navigation"
          >
            {MENU_HEADERS.map((item) => (
              <li key={item.id}>
                <a href={item.path}>{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>
        <div className={styles.wrapperImg}>
          {SEASONS_IMAGES.map((img) => (
            <img
              className={styles.mainImg}
              key={img.id}
              alt={img.name}
              src={img.src}
            />
          ))}
        </div>
        <Characters />
      </main>
      <footer className="border">
        <div>
          <div className="footerSocial">
            <a href="https://github.com/majomaken" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
          <div className="footerSocial">
            <a
              href="https://www.linkedin.com/in/miguel-angel-jimenez-ochoa/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
        <span>💻by egonella &copy 2024 </span>
        <span>&copy; Todos los derechos afanados</span>
      </footer>
    </div>
  );
};

export default App;
