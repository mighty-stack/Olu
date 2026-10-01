import "../Styles/Hero.css";

const proof = [
  ["~24", "posts live on a client CMS I built"],
  ["4", "admins publishing on it today"],
  ["3", "user roles in one logistics platform"],
  ["10", "projects shipped across the MERN stack"],
];

function Hero() {
  return (
    <header id="top" className="hero">
      <div className="wrap hero-layout">
        <div className="hero-copy">
          <p className="mono rv">Full-stack developer · Available for freelance &amp; remote work</p>
          <h1 className="rv">I build software people <em>actually use</em>.</h1>
          <p className="lede rv">
            I design the database, write the API and build the interface.{" "}
            <b>Auth, payments, role-based admin tools, an AI tutor</b>: the parts that make a
            product work, not just look finished.
          </p>
          <div className="hero-cta rv">
            <a className="pf-btn" href="#work">See the work</a>
            <a className="tlink" href="#contact">Or email me directly</a>
          </div>
        </div>

        <div className="hero-portrait rv">
          <img src="/headshot.webp" alt="Olumide Alabi" />
        </div>

        <div className="proof rv">
          {proof.map(([num, label]) => (
            <div key={label}>
              <b>{num}</b>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Hero;
