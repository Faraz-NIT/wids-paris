import "./Ambassador.css";

const Ambassador = () => {
  return (
    <section className="ambassador-section">
      <div className="ambassador-container">
        <h2 className="ambassador-title">
          WiDS Paris <span>@emlyon</span> Ambassador
        </h2>

        <div className="ambassador-card">
          <div
            className="ambassador-avatar"
            style={{
              backgroundImage:
                "url(/images/imene-brigui.jpg)", // place image in public/images
            }}
          />

          <h3 className="ambassador-name">Imène Brigui, PhD</h3>
          <p className="ambassador-role">
            Associate Dean for Master’s programs at emlyon business school
          </p>
        </div>
      </div>
    </section>
  );
};

export default Ambassador;
