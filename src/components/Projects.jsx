import "../styles/projects.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: "Footer projet Rénomeuble",
      description:
        "Accés aux réseaux sociaux dans une nouvelle en toute sécurité depuis le footer. Logo des réseaux sociaux bootstrap cliquable",
      techno: "React • Bootstrap",
      image: "/images_codage/reseaux.png",
    },

    {
      title: "Récupération des catégories",
      description:
        "Route de l’API permettant de récupérer les catégories depuis la base de données. Une requête SQL est exécutée afin de sélectionner les données, qui sont ensuite retournées au format JSON. Ces données sont utilisées par le front-end pour afficher dynamiquement les catégories du site.",
      techno: "PHP",
      image: "/images_codage/Capture d'écran 2026-05-15 180917.png",
    },

    {
      title: "Requête SQL",
      description:
        "Requête SQL qui permet la crétion de la base donnée Rénomeuble.La base renomeuble_db est créée avec l’encodage utf8mb4 afin de garantir la compatibilité avec les caractères spéciaux.",
      techno: "Base de donées • MySQL",
      image: "/images_codage/reseaux.png",
    },
  ];

  return (
    <>
      <section className="projects">
        <h2>Mes projets</h2>
        <p>
          Le projet présenté ci-dessous est la réalisation d'un site internet
          pour une entreprise de rénovation de meubles. Ce site permet de mieux
          connaître le principe de cette entreprise, de présenter les meubles
          qui ont été rénovés et qui sont disponibles à la vente. Les clients
          peuvent prendre contact avec les gérants via un formulaire de contact.
          Ils peuvent également accéder aux informations de l'entreprise.
        </p>

        <p className="para">
          Le site contient une partie réservée aux administrateurs qui, une fois
          connectés via un formulaire sécurisé, peuvent accéder à toute
          l'administration du site. Ils peuvent consulter les messages reçus
          ainsi que gérer les catégories et les produits de leur entreprise via
          des modales.
        </p>
        <div className="projects-container">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              techno={project.techno}
              image={project.image}
            />
          ))}
        </div>
      </section>
      <div className="line"></div>
    </>
  );
}

export default Projects;
