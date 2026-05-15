import "../styles/project_card.css";

function ProjectCard({ title, description, techno, image }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{techno}</p>
      <img src={image} alt={title} />
    </div>
  );
}

export default ProjectCard;
