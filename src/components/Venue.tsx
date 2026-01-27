import "./Venue.css";

const Venue = () => {
  return (
    <section className="about-wids">
      <div className="about-wids-container">

        {/* LEFT IMAGE */}
        <div className="about-wids-image" />

        {/* RIGHT TEXT */}
        <div className="about-wids-content">
          <h2>About WiDS Paris @ emlyon</h2>

          <p>
            WiDS Paris @emlyon is an independent event organized by emlyon,
            coinciding with the annual Women in Data Science (WiDS) Worldwide
            Conference held at Stanford University, connecting over 200+
            locations worldwide. All genders are invited to attend WiDS
            regional events, which feature outstanding women doing
            outstanding work.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Venue;
