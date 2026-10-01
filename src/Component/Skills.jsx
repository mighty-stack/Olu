import skills from "../Data/Skills";
import "../Styles/Skills.css";

function Skills() {
  return (
    <section id="stack" className="pf-section">
      <div className="wrap cols">
        <h2 className="rv">What I <em>build with</em></h2>
        <div className="rv">
          {skills.map((group) => (
            <div className="kv" key={group.category}>
              <span className="mono">{group.category}</span>
              <p>{group.items.join(", ")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
