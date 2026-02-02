import "./Agenda.css";

/* ==================== TYPES ==================== */

type Panelist = {
  name: string;
  role: string;
};

type CompanyPanel = {
  name: string;
  logo: string;
  panelist: Panelist;
};

type AgendaItem =
  | {
      time: string;
      speaker: string;
      logo: string;
      role?: string;
      companies?: never;
    }
  | {
      time: string;
      speaker: string;
      companies: CompanyPanel[];
      logo?: never;
      role?: never;
    }
  | {
      time: string;
      speaker: string;
      logo?: never;
      role?: never;
      companies?: never;
    };

/* ==================== DATA ==================== */

const agendaItems: AgendaItem[] = [
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
    speaker: "Panel Discussion",
    companies: [
      {
        name: "UBISOFT",
        logo: "/images/ubisoft-logo.png",
        panelist: {
          name: "Jacqueline Lefèvre Lopez",
          role: "Senior Data Scientist"
        }
      },
      {
        name: "AXA",
        logo: "/images/axa-logo.png",
        panelist: {
          name: "Cristina Oprean",
          role: "Head of AI Governance & R&D"
        }
      },
      {
        name: "DASSAULT SYSTEMES",
        logo: "/images/k.png",
        panelist: {
          name: "Marion Jullien",
          role: "Strategic Client Insights & Data Leader"
        }
      },
      {
        name: "SUEZ",
        logo: "/images/suez-logo.png",
        panelist: {
          name: "Bianca Roatis",
          role: "Director of Experience and Client Relations"
        }
      }
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

/* ==================== COMPONENT ==================== */

const Agenda = () => {
  return (
    <section className="agenda-section">
      <div className="agenda-container">
        <h2 className="agenda-title">Schedule</h2>

        <div className="agenda-timeline">
          {agendaItems.map((item, index) => {
            /* ================= PANEL DISCUSSION ================= */
            if (item.companies) {
              return (
                <div key={index} className="agenda-row">
                  <div className="agenda-time">{item.time}</div>
                  <div className="agenda-dot" />

                  <div className="agenda-card-group">
                    <h3 className="panel-title">{item.speaker}</h3>

                    {item.companies.map((c, i) => (
                      <div key={i} className="agenda-card panel-card">
                        <div className="agenda-card-header">
                          <div className="agenda-logos-inline">
                            <img src={c.logo} alt={c.name} />
                          </div>

                          <div className="agenda-text">
                            <h3>{c.panelist.name}</h3>
                            <p>{c.panelist.role}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }

            /* ================= NORMAL ITEMS ================= */
            return (
              <div key={index} className="agenda-row">
                <div className="agenda-time">{item.time}</div>
                <div className="agenda-dot" />

                <div className="agenda-card">
                  {item.logo ? (
                    <div className="agenda-card-header">
                      <div className="agenda-logos-inline">
                        <img src={item.logo} alt="" />
                      </div>

                      <div className="agenda-text">
                        <h3>{item.speaker}</h3>
                        {item.role && <p>{item.role}</p>}
                      </div>
                    </div>
                  ) : (
                    <h3>{item.speaker}</h3>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Agenda;
