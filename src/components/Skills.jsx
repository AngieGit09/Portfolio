import "../styles/skills.css";

function Skills() {
  const frontSkills = [
    { name: "HTML", level: "80%" },
    { name: "CSS", level: "60%" },
    { name: "JavaScript", level: "55%" },
    { name: "React", level: "50%" },
    { name: "Figma", level: "85%" },
  ];

  const backSkills = [
    { name: "PHP", level: "35%" },
    { name: "Symfony", level: "25%" },
    { name: "MySQL", level: "60%" },
    { name: "Git/GitHub", level: "70%" },
  ];

  return (
    <section className="skills">
      <h2>Compétences</h2>

      <div className="skills-container">
        <div className="front-end">
          <h3>Front-End</h3>

          {frontSkills.map((skill) => (
            <div className="skill">
              <p>{skill.name}</p>

              <div className="progress-bar">
                <div className="progress" style={{ width: skill.level }}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="vertical-line"></div>

        <div className="back-end">
          <h3>Back-End</h3>

          {backSkills.map((skill) => (
            <div className="skill">
              <p>{skill.name}</p>

              <div className="progress-bar">
                <div className="progress" style={{ width: skill.level }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="line"></div>
    </section>
  );
}

export default Skills;
