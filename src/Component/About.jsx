import "../Styles/About.css";

function About() {
  return (
    <section id="about" className="pf-section">
      <div className="wrap cols">
        <div className="rv">
          <h2>About</h2>
          <figure className="portrait-wrap">
            <img
              className="portrait"
              src="/headshot.webp"
              alt="Olumide Alabi"
              onError={(e) => {
                e.currentTarget.parentElement.style.display = "none";
              }}
            />
          </figure>
        </div>

        <div className="about-copy rv">
          <p className="big">
            Physiology degree first. Code second. Shipping is the part I care about.
          </p>
          <p>
            I trained in full-stack development at SQI College of ICT (2024–25), then interned at
            Remotehustle/I-REV in 2026, where I built the CMS now running their blog.
          </p>
          <p>
            A science background taught me to work methodically: isolate the variable, test it,
            write down what happened. I debug the same way.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
