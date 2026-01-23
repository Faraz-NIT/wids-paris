import "./Agenda.css";

const Agenda = () => {
  const agendaItems = [
    {
      time: "5:00 – 5:20 pm",
      logo: "/images/sfr-logo.png",
      speaker: "Pauline de Malherbe",
      role: "Business Leader & Director, Product Procurement and alumna"
    },
    {
      time: "5:20 – 5:40 pm",
      logo: "/images/artefact-logo.jpg",
      speaker: "Justine Nerce",
      role: "CEO and alumna of the school"
    },
    {
      time: "5:40 – 6:10 pm",
      logos: [
        { name: "UBISOFT", image: "/images/ubisoft-logo.png" },
        { name: "AXA", image: "/images/axa-logo.png" },
        { name: "DASSAULT", image: "/images/dassault-logo.png" }
      ],
      speaker: "Panel discussion",
      panelists: [
        { name: "Jacqueline Lefèvre Lopez", role: "Senior Data Scientist" },
        { name: "Cristina OPREAN", role: "Head of AI Governance & R&D" },
        { name: "Marion JULLIEN", role: "Strategic Client Insights & Data Leader" }
      ]
    },
    {
      time: "6:10 – 6:30 pm",
      logo: "/images/aws-logo.png",
      speaker: "Ségolène Dessertine-Panhard",
      role: "Global Tech Lead – Responsible AI"
    },
    {
      time: "6:30 – 7:00 pm",
      speaker: "SFR Data Challenge Award Ceremony"
    },
    {
      time: "7:00 – 8:30 pm",
      speaker: "Networking Cocktail Reception"
    }
  ];

  return (
    <section className="agenda-section">
      <div className="agenda-container">
        <h2 className="agenda-title">Schedule</h2>

        <div className="agenda-timeline">
          {agendaItems.map((item, index) => (
            <div key={index} className="agenda-row">
  <div className="agenda-time">{item.time}</div>

  <div className="agenda-dot" />

  <div className="agenda-card">
    <div className="agenda-card-header">
      {(item.logo || item.logos) && (
        <div className="agenda-logos-inline">
          {item.logo && <img src={item.logo} alt="" />}
          {item.logos &&
            item.logos.map((l, i) => (
              <img key={i} src={l.image} alt={l.name} />
            ))}
        </div>
      )}

      <div className="agenda-text">
        <h3>{item.speaker}</h3>

        {item.panelists ? (
          <ul>
            {item.panelists.map((p, i) => (
              <li key={i}>
                <strong>{p.name}</strong> — {p.role}
              </li>
            ))}
          </ul>
        ) : (
          item.role && <p>{item.role}</p>
        )}
      </div>
    </div>
  </div>
</div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default Agenda;
