import './App.css'
import Hero from "./components/Hero.tsx";
import Venue from "./components/Venue";
import Agenda from "./components/Agenda";
import Team from "./components/Team";
import Ambassador from "./components/Ambassador";


function App() {
  return (
    <div className="landing-page">
      {/* Header - Sticky Container */}
     <header className="header-wrapper">
  {/* Floating Logos */}
  
  <div className="logo-row">
    <a
  href="https://www.em-lyon.com"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src="/emlyon-logo.png"
    alt="EM Lyon Business School"
    className="emlyon-logo"
  />
</a>

    {/* WiDS Logo */}
      <img
        src="/wids-logo.png"
        alt="Women in Data Science Worldwide"
        className="wids-logo"
      />
<img
        src="/widsparis.png"
        alt="Women in Data Science Worldwide"
        className="wids-logo"
      />

    
  </div>

  {/* Navbar */}
  <nav className="navbar">
    <div className="nav-container">
      <ul className="nav-menu">
        <li><a
    href="https://www.widsconference.org"
    target="_blank"
    rel="noopener noreferrer"
    
  >About</a></li>
        <li><a href="#agenda-section">Schedule</a></li>
        <li><a href="#schedule">Speakers</a></li>
        <li>
  <a
    href="https://forms.office.com/e/3KJgxBZx7i?origin=lprLink "
    target="_blank"
    rel="noopener noreferrer"
  >
    Register
  </a>
</li>

      </ul>
    </div>
  </nav>
</header>


      {/* Hero Section */}
      {/* Hero Section */}
<Hero />
<Venue/>

      {/* Agenda Section */}
<section id="agenda-section"><Agenda/></section>

      {/* Schedule Section - Enhanced */}
<section id="schedule" className="schedule">
  <div className="container">
    <h2 className="section-title">Speakers</h2>
    <div className="schedule-container">
      {/* Time Slot 1 */}
      <div className="schedule-time-slot">
        <div className="time-header">1st Conference</div>
        <div className="schedule-cards-row speaker-row-with-keynote">
          <div className="schedule-card">
            <div className="speaker-avatar-circle" style={{backgroundImage: 'url(/images/pauline.jpg)'}}></div>
            <h1 className="speaker-name">Pauline de Malherbe</h1>
            <p className="speaker-role">Business Leader & CMO, specializing in Technology and alumna of the school at SFR</p>
            <div className="schedule-card-hover">
              <h3>About</h3>
              <p className="hover-text">
 As CMO of SFR Business, I drive product roadmaps, serving major corporate, mid-market, and SMB segments, along with digital marketing, data and BI, aligning growth with innovative solutions. With more than 15 years in the Telco industry, I have led initiatives across Mobile, Broadband, Cybersecurity, IoT, and more, focusing on profitability, sustainability, and technological disruption. Have also contributed to global technology synergies for Altice group, coordinating operation companies across 4 regions over 5 years. I lead by example with energy and passion, fostering a collaborative culture of empowerment that drives innovation and engagement. </p>
            </div>
          </div>
          <div className="keynote-card">
            <div className="keynote-label">Keynote</div>
            <div className="keynote-title">Thriving in Tech: a journey from fitting in to being myself</div>
            <div className="keynote-desc"> I started my career trying to fit in, held back by insecurities about being young, female, and non‑technical. Over time, embracing my authentic leadership—warm, joyful, and human—became my turning point. Staying true to myself not only made me happier; it inspired others to follow and enabled my biggest achievements in tech. </div>
          </div>
        </div>
      </div>

      {/* Time Slot 2 */}
      <div className="schedule-time-slot">
        <div className="time-header">2nd Conference</div>
        <div className="schedule-cards-row speaker-row-with-keynote">
          <div className="schedule-card">
            <div className="speaker-avatar-circle" style={{backgroundImage: 'url(/images/soratis.png)'}}></div>
            <p className="speaker-name">Marine Sortais</p>
            <p className="speaker-role">Data Consulting Director at ARTEFACT</p>
            <div className="schedule-card-hover">
              <h3>About</h3>
              <p className="hover-text">
              </p>
              
            </div>
          </div>
          
        </div>
      </div>

      {/* Time Slot 3 */}
      <div className="schedule-time-slot">
        <div className="time-header">Round Table</div>
        <div className="schedule-cards-row speaker-row-with-keynote">
          <div className="schedule-card">
            <div className="speaker-avatar-circle" style={{backgroundImage: 'url(/images/jacqueline.jpg)'}}></div>
            <p className="speaker-name">Jacqueline Lefevre Lopez</p>
            <p className="speaker-role">Senior Data Scientist at UBISOFT</p>
            <div className="schedule-card-hover">
              <h3>About</h3>
              <p className="hover-text">
I’m a senior data scientist with over 4 years of experience in the gaming industry. I work on personalization, using data and machine learning to better match content to players. My role covers the full scope of a project, from defining the problem and exploring the data, to building models and making sure they work in practice. I have a strong background in mathematics and coding, and I enjoy working on problems where I can combine theory with real impact.              </p>
              
            </div>
          </div>
          <div className="schedule-card">
            <div className="speaker-avatar-circle" style={{backgroundImage: 'url(/images/bianca.jpg)'}}></div>
            <p className="speaker-name">Bianca Roatis</p>
            <p className="speaker-role"> Director of Experience and Client Relations at Suez</p>
            <div className="schedule-card-hover">
              <h3>About</h3>
              <p className="hover-text">
Bianca Roatis has been Director of Customer Relations, Experience, and Data at Suez Recycling and Recovery France since 2022. With over 18 years of experience in B2B sectors such as environment, construction, and investment banking, she began her career in customer relations and data at Renault. Her expertise focuses on customer experience, digital, and data. At SUEZ, she leads the customer experience roadmap, digitalization , and customer service, notably improving customer satisfaction and promoted a customer-centric culture.</p>
              
            </div>
          </div>
          <div className="schedule-card">
            <div className="speaker-avatar-circle" style={{backgroundImage: 'url(/images/cristina.jpg)'}}></div>
            <p className="speaker-name">Cristina Oprean</p>
            <p className="speaker-role">Head of AI, Governance at AXA</p>
            <div className="schedule-card-hover">
              <h3>About</h3>
              <p className="hover-text"> A researcher at Telecom Paris specializing in Signal and Image Processing, she currently serves as Acting Head of Data Science at Accor Paris. Balancing scientific research with entrepreneurial practice, Cristina is recognized for impactful contributions in Computer Vision and Signal Processing, with a strong focus on translating research into durable, sustainable products. Her work exemplifies the synergy between academic insight and real-world innovation in AI and data science.</p>
              
            </div>
          </div>
          <div className="schedule-card">
            <div className="speaker-avatar-circle" style={{backgroundImage: 'url(/images/marion.jpg)'}}></div>
            <p className="speaker-name">Marion Jullien</p>
            <p className="speaker-role">Insights & Data Leader, Global Tech Lead Governance and Responsible AI at 3DS</p>
          <div className="schedule-card-hover">
              <h3>About</h3>
              <p className="hover-text">
Marion JULLIEN is a strategic corporate planning and client insights leader at Dassault Systèmes, where she supports client data-driven corporate strategy and decision-making. She began her career at Deloitte Société d’Avocats, developing strong expertise in international tax and transfer pricing. She then joined Dassault Systèmes within the Corporate Tax Group where she worked on the standard process automation, before moving into her current role at the intersection of strategy, competition, client insights, and business performance.</p>
              
            </div>
          </div>
          
        </div>
      </div>

      {/* Time Slot 4 */}
      <div className="schedule-time-slot">
        <div className="time-header">3rd Conference</div>
        <div className="schedule-cards-row speaker-row-with-keynote">
          <div className="schedule-card">
            <div className="speaker-avatar-circle" style={{backgroundImage: 'url(/images/dessertine.jpg)'}}></div>
            <p className="speaker-name">Ségolène Dessertine-Panhard</p>
            <p className="speaker-role">Global Tech Lead Governance and Responsible AI at AWS</p>
            <div className="schedule-card-hover">
              <h3>About</h3>
              <p className="hover-text">
                Segolene Dessertine-Panhard is the global tech lead for Responsible AI and AI governance initiatives at the AWS Generative AI Innovation Center. In this role, she supports AWS customers in scaling their generative AI strategies by implementing robust governance processes and effective AI and cybersecurity risk management systems, leveraging AWS capabilities and state-of-the-art scientific models. Prior to joining AWS in 2018, she was a full-time professor of Finance at New York University’s Tandon School of Engineering. She also served for several years as an independent consultant in financial disputes and regulatory investigations. She holds a Ph.D. from Paris Sorbonne University.              </p>
              
            </div>
          </div>
          <div className="keynote-card">
            <div className="keynote-label">Keynote</div>
            <div className="keynote-title">Responsible AI in the Generative AI area</div>
            <div className="keynote-desc">Responsible AI governance isn’t a constraint—it’s a catalyst. By embedding governance into the fabric of AI development, organizations can innovate with confidence, knowing they have the controls to scale securely and responsibly. In this session, you will learn how to transform theoretical frameworks into practical solutions that drive business value while maintaining trust</div>
          </div>
        </div>
      </div>

      {/* Time Slot 5 */}
      
      {/* Time Slot 6 */}
      
    </div>
  </div>
</section>

    

     
      <Ambassador />

      {/* Team Section */}
      <Team/>

      {/* Footer */}
     <footer className="footer">
  <div className="container">
    <div className="footer-content">
      <div className="footer-section">
        <h3>
  <a
    href="https://www.widsconference.org"
    target="_blank"
    rel="noopener noreferrer"
    
  >
    About WiDS Global
  </a>
</h3>

        <p>
          Empowering women in data science through education, community, and
          opportunity.
        </p>
      </div>

      <div className="footer-section">
        
        <h3>Quick Links</h3>
        <ul className="footer-links">
          
          <li><a href="#agenda-section">Schedule</a></li>
          <li><a href="#schedule">Speakers</a></li>
          <li>
  <a
    href="https://forms.office.com/e/3KJgxBZx7i?origin=lprLink "
    target="_blank"
    rel="noopener noreferrer"
  >
    Register
  </a>
</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Contact</h3>
        <p>Email: wids@em-lyon.com</p>
      </div>
      <div className="footer-section">
        <h3>Venue</h3>
        <p>Emlyon Business School, 15 Boulevard Diderot, 75012 Paris</p>
      </div>
    </div>
  </div>

  {/* Legal / Copyright strip */}
  <div className="footer-legal">
  <p>
    <strong>Copyright:</strong> Content, structure and photographic material of
    this website are protected by copyright. Reproduction requires prior consent
    of the operator.
  </p>
  <p>
    <strong>Liability Notice:</strong> We assume no liability for the content of
    external links. The operators of linked pages are solely responsible for
    their content.
  </p>
</div>

</footer>

    </div>
  )
}

export default App
