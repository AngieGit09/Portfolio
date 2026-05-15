import "../styles/contact.css";

function Contact() {
  return (
    <>
      <section className="contact">
        <h2>Contact</h2>

        <p>
          N'hésitez pas à me contacter pour échanger autour d'un projet ou d'une
          opportunité.
        </p>

        <div className="contact-links">
          <a href="mailto:liardangelique@gmail.com">
            Me contacter : envoyer un email
          </a>

          <a
            href="https://github.com/AngieGit09"
            target="_blank"
            rel="noopener noreferrer"
          >
            Retrouver tous mes projets réalisés sur : Mon GitHub
          </a>
        </div>
      </section>
      <div className="line"></div>
    </>
  );
}

export default Contact;
