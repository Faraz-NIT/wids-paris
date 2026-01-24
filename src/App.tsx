import './App.css'
import Hero from "./components/Hero.tsx";
import Venue from "./components/Venue";
import Agenda from "./components/Agenda";
import Team from "./components/Team";
import Ambassador from "./components/ambassador.tsx";


function App() {
  return (
    <div className="landing-page">
      {/* Header - Sticky Container */}
     <header className="header-wrapper">
  {/* Floating Logos */}
  
  <div className="logo-row">
    <img
      src="/emlyon-logo.png"
      alt="EM Lyon Business School"
      className="emlyon-logo"
    />
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
        <li><a href="#about">About</a></li>
        <li><a href="#agenda-section">Schedule</a></li>
        <li><a href="#schedule">Speakers</a></li>
        <li><a href="#register">Register</a></li>
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
        <div className="schedule-cards-row">
          <div className="schedule-card">
            <div className="speaker-avatar-circle" style={{backgroundImage: 'url(/images/pauline.jpg)'}}></div>
            
            <h1 className="speaker-name">Pauline de Malherbe</h1>
            <p className="speaker-role">Business Leader, specialising in Technology, currently CMO at SFR</p>

            {/* Hover card */}
            <div className="schedule-card-hover">
              <h3>About</h3>
              <p className="hover-text">
                As CMO of SFR Business, she drives product strategy and growth across enterprise and SMB segments, leading digital marketing, data, and BI to deliver innovative, sustainable solutions. With 15+ years in telecom, she has led global initiatives across Mobile, Broadband, Cybersecurity, and IoT, fostering collaboration and innovation across regions
              </p>
              
            </div>
          </div>

          
        </div>
      </div>

      {/* Time Slot 2 */}
      <div className="schedule-time-slot">
        <div className="time-header">2nd Conference</div>
        <div className="schedule-cards-row">
          <div className="schedule-card">
            <div className="speaker-avatar-circle" style={{backgroundImage: 'url(/images/justine.jpg)'}}></div>
            
            <p className="speaker-name">Justine Nerce</p>
            <p className="speaker-role">CEO at ARTEFACT</p>
            <div className="schedule-card-hover">
    <h3>About</h3>
              <p className="hover-text">
                As CMO of SFR Business, she drives product strategy and growth across enterprise and SMB segments, leading digital marketing, data, and BI to deliver innovative, sustainable solutions. With 15+ years in telecom, she has led global initiatives across Mobile, Broadband, Cybersecurity, and IoT, fostering collaboration and innovation across regions
              </p>
  </div>
          </div>
         
         

        </div>
      </div>

      {/* Time Slot 3 */}
      <div className="schedule-time-slot">
        <div className="time-header">Round Table</div>
        <div className="schedule-cards-row">
           <div className="schedule-card">
            <div className="speaker-avatar-circle" style={{backgroundImage: 'url(/images/jacqueline.jpg)'}}></div>
           
            <p className="speaker-name">Jacqueline Lefevre Lopez</p>
            <p className="speaker-role">Senior Data Scientist at UBISOFT</p>
            <div className="schedule-card-hover">
    <h3>About</h3>
              <p className="hover-text">
                As CMO of SFR Business, she drives product strategy and growth across enterprise and SMB segments, leading digital marketing, data, and BI to deliver innovative, sustainable solutions. With 15+ years in telecom, she has led global initiatives across Mobile, Broadband, Cybersecurity, and IoT, fostering collaboration and innovation across regions
              </p>
  </div>
          </div>
          <div className="schedule-card">
            <div className="speaker-avatar-circle" style={{backgroundImage: 'url(/images/cristina.jpg)'}}></div>
            
            <p className="speaker-name">Cristina Oprean</p>
            <p className="speaker-role">Head of AI, Governance at AXA</p>
            <div className="schedule-card-hover">
    <h3>About</h3>
              <p className="hover-text">
                As CMO of SFR Business, she drives product strategy and growth across enterprise and SMB segments, leading digital marketing, data, and BI to deliver innovative, sustainable solutions. With 15+ years in telecom, she has led global initiatives across Mobile, Broadband, Cybersecurity, and IoT, fostering collaboration and innovation across regions
              </p>
  </div>
          </div>
          <div className="schedule-card">
            <div className="speaker-avatar-circle" style={{backgroundImage: 'url(/images/marion.jpg)'}}></div>
          
            <p className="speaker-name">Marion JULLIEN Ségolène</p>
            <p className="speaker-role">Insights & Data Leader, Global Tech Lead Governance and Responsible AI at 3DS</p>
            <div className="schedule-card-hover">
    <h3>About</h3>
              <p className="hover-text">
                As CMO of SFR Business, she drives product strategy and growth across enterprise and SMB segments, leading digital marketing, data, and BI to deliver innovative, sustainable solutions. With 15+ years in telecom, she has led global initiatives across Mobile, Broadband, Cybersecurity, and IoT, fostering collaboration and innovation across regions
              </p>
  </div>
          </div>
          
        </div>
      </div>

      {/* Time Slot 4 */}
      <div className="schedule-time-slot">
        <div className="time-header">3rd Conference</div>
        <div className="schedule-cards-row">
          <div className="schedule-card">
            <div className="speaker-avatar-circle" style={{backgroundImage: 'url(/images/dessertine.jpg)'}}></div>
            
            <p className="speaker-name">Dessertine-Panhard</p>
            <p className="speaker-role">Corporate Strategic Planning - Strategic Client at AWS</p>
            <div className="schedule-card-hover">
    <h3>About</h3>
              <p className="hover-text">
                As CMO of SFR Business, she drives product strategy and growth across enterprise and SMB segments, leading digital marketing, data, and BI to deliver innovative, sustainable solutions. With 15+ years in telecom, she has led global initiatives across Mobile, Broadband, Cybersecurity, and IoT, fostering collaboration and innovation across regions
              </p>
  </div>
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
          <li><a href="#register">Register</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Contact</h3>
        <p>Email: wids@em-lyon.com</p>
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
