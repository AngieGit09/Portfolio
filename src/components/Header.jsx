import "../styles/header.css";

function Header() {
  return (
    <header>
      <h1>Mon portfolio</h1>
      <h2>Liard Angélique</h2>
      <h2>Développeuse web junior</h2>
      <a href="#projects">
        <button>Voir mes projets</button>
      </a>
      <a href="#contact">
        <button>Me contacter</button>
      </a>
      <div className="line"></div>
    </header>
  );
}

export default Header;
