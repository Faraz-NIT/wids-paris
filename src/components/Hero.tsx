import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">

        <div className="hero-content">
          <h1>WiDS @ emlyon Paris</h1>
          <h2>10th February 2026 | emlyon business school</h2>
          <p>
            Cultivating the next generation of Data Science and AI leaders by
            providing resources for upskilling, networking, mentorship, and
            growth opportunities—from students to professionals.
          </p>

          <div className="hero-cta">
            <button className="btn-register">Register Now </button>
          </div>
        </div>

        <div className="hero-mosaic">
          <div className="tile tile-green" />
          <div className="tile img img-1" />
          <div className="tile tile-blue" />

          <div className="tile img img-2" />
          <div className="tile tile-yellow" />
          <div className="tile img img-3" />

          <div className="tile img img-4" />
          <div className="tile tile-green" />
          <div className="tile img img-5" />
        </div>

      </div>
    </section>
  );
};

export default Hero;
