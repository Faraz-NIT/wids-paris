import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">

        <div className="hero-content">
          <h1>WiDS @ emlyon Paris</h1>
          <h2>
  10th February 2026 | emlyon business school |
  <a 
    href="https://maps.app.goo.gl/BHVtt1hfcwiEYtih7"
    target="_blank"
    rel="noopener noreferrer"
  >
    15 Boulevard Diderot, 75012 Paris
  </a>
</h2>

          <p>
Join our event that fosters a vibrant and inclusive data science community - bringing together students, professionals, researchers, data science enthusiasts, and people considering a career transition into data at any stage of their journey to advance knowledge and innovation in the field.          </p>

          <div className="hero-cta">
            <button
  className="btn-register"
  onClick={() => window.open("https://forms.office.com/e/3KJgxBZx7i?origin=lprLink", "_blank")}
>
  Register Now
</button>

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
