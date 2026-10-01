import projects, { more } from "../Data/Project";
import "../Styles/Project.css";

const featured = projects.filter((p) => p.visible !== false);

function Projects() {
  return (
    <section id="work" className="pf-section">
      <div className="wrap">
        <div className="sec-head">
          <h2>Selected <em>work</em></h2>
          <span className="mono">{String(featured.length).padStart(2, "0")} projects</span>
        </div>

        {featured.map((p, i) => (
          <article className="case rv" key={p.title}>
            <div className="shot">
              <div className="shot-bar">
                <i /><i /><i />
                <span>{p.url}</span>
              </div>
              {p.image ? (
                <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" />
              ) : (
                <div className="shot-ph">Screenshot</div>
              )}
            </div>

            <div className="info">
              <span className="mono tag">
                {String(i + 1).padStart(2, "0")} · {p.tag}
              </span>
              <h3>{p.title}</h3>
              <p>{p.summary}</p>

              <ul>
                {p.built.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <div className="stack-tags">
                {p.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>

              <div className="ilinks">
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer">Live site ↗</a>
                )}
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer">Code ↗</a>
                )}
                {p.codeOnRequest && <a href="#contact">Code walkthrough on request →</a>}
              </div>
            </div>
          </article>
        ))}

        <div className="more rv">
          <p className="mono">More work</p>
          {more.map((m) => (
            <a key={m.title} href={m.href} target="_blank" rel="noreferrer">
              <span>{m.title}</span>
              <small>{m.text}</small>
              <span>↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
