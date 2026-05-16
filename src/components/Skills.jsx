import "../styles/Skills.css";

function Skills() {
  const frontSkills = [
    { name: "HTML", level: "80%" },
    { name: "CSS", level: "70%" },
    { name: "JavaScript", level: "60%" },
    { name: "React", level: "55%" },
    { name: "Figma", level: "90%" },
  ];

  const backSkills = [
    { name: "PHP", level: "40%" },
    { name: "Symfony", level: "35%" },
    { name: "MySQL", level: "70%" },
    { name: "Git/GitHub", level: "80%" },
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
