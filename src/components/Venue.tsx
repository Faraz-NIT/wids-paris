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
            As part of this global movement launched by Stanford University, the chapter aims to inspire, educate, and empower individuals in the field of data science and AI, with a strong emphasis on highlighting the contributions of women in tech, , connecting over 200+ locations worldwide. This in-person event features outstanding women discussing their exceptional work in data science, AI, and related fields, across a wide range of domains. Everyone is welcome.
Experience the energy of this unique event - get inspired by a great lineup of speakers and panel discussions featuring professionals from industry and academia. You can find the progam schedule and list of speakers below.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Venue;
