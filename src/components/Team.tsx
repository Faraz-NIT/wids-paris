import "./Team.css";

const Team = () => {
  const teamMembers = [
     {
      name: "Marie-Victoire Stiquel",
      role: "Responsable grands comptes at emlyon",
      image: "/images/team-member-3.jpg"
    },
    {
      name: "Ekaterina Dimitrieva",
      role: "Coordinator",
      image: "/images/team-member-1.jpg"
    },
    {
      name: "Mary Sheeba Theodore",
      role: "Coordinator",
      image: "/images/team-member-2.jpg"
    },
    {
      name: "Lisa Garcia",
      role: "Sponsorship",
      image: "/images/team-member-4.jpg"
    },
    {
      name: "Claire Martin",
      role: "Logistics",
      image: "/images/team-member-5.jpg"
    }
  ];

  return (
    <section className="team-section">
      <div className="team-container">
        <h2 className="team-title">Organizing Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <div className="team-member-image">
                <img src={member.image} alt={member.name} />
              </div>
              <h3 className="team-member-name">{member.name}</h3>
              <p className="team-member-role">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
