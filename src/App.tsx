import './App.css'
import Hero from "./components/Hero.tsx";
import Venue from "./components/Venue";

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
        <li><a href="#highlights">Highlights</a></li>
        <li><a href="#time">Schedule</a></li>
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
            <p className="speaker-role">Business Leader, specialising in Technology, currently CMO</p>

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
            <h3>2ème conférence</h3>
            <p className="speaker-name">Justine Nerce</p>
            <p className="speaker-role">CEO at ARTEFACT</p>
            <div className="schedule-card-hover">
    <h3>About</h3>
              <p className="hover-text">
                As CMO of SFR Business, she drives product strategy and growth across enterprise and SMB segments, leading digital marketing, data, and BI to deliver innovative, sustainable solutions. With 15+ years in telecom, she has led global initiatives across Mobile, Broadband, Cybersecurity, and IoT, fostering collaboration and innovation across regions
              </p>
  </div>
          </div>
          <div className="schedule-card">
            <div className="speaker-avatar-circle" style={{backgroundImage: 'url(/images/jacqueline.jpg)'}}></div>
            <h3>2ème conférence</h3>
            <p className="speaker-name">Jacqueline Lefevre Lopez</p>
            <p className="speaker-role">Senior Data Scientist at UBISOFT</p>
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
            <div className="speaker-avatar-circle" style={{backgroundImage: 'url(/images/marion.jpg)'}}></div>
            <h3>Table ronde</h3>
            <p className="speaker-name">Marion JULLIEN Ségolène</p>
            <p className="speaker-role">Insights & Data Leader, Global Tech Lead Governance and Responsible AI at 3DS</p>
            <div className="schedule-card-hover">
    <h3>About</h3>
              <p className="hover-text">
                As CMO of SFR Business, she drives product strategy and growth across enterprise and SMB segments, leading digital marketing, data, and BI to deliver innovative, sustainable solutions. With 15+ years in telecom, she has led global initiatives across Mobile, Broadband, Cybersecurity, and IoT, fostering collaboration and innovation across regions
              </p>
  </div>
          </div>
          <div className="schedule-card">
            <div className="speaker-avatar-circle" style={{backgroundImage: 'url(/images/dessertine.jpg)'}}></div>
            <h3>Table ronde</h3>
            <p className="speaker-name">Dessertine-Panhard</p>
            <p className="speaker-role">Corporate Strategic Planning - Strategic Client at AWS</p>
          </div>
        </div>
      </div>

      {/* Time Slot 4 */}
      <div className="schedule-time-slot">
        <div className="time-header">3rd Conference</div>
        <div className="schedule-cards-row">
          <div className="schedule-card">
            <div className="speaker-avatar-circle" style={{backgroundImage: 'url(/images/speaker-placeholder.jpg)'}}></div>
            <h3>3ème conférence</h3>
            <p className="speaker-name">TBA</p>
            <p className="speaker-role">Speaker Title & Company</p>
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
      <div className="schedule-time-slot">
        <div className="time-header">SFR Award Ceremony</div>
        <div className="schedule-cards-row full-width">
          <div className="schedule-card large">
            <h3>Remise du prix du SFR Data challenge</h3>
            <p className="speaker-role">Award ceremony and celebration</p>
          </div>
        </div>
      </div>

      {/* Time Slot 6 */}
      
    </div>
  </div>
</section>

    

      {/* Schedule Section */}
      <section id="time" className="schedule">
        <div className="container">
          <h2 className="section-title">Schedule</h2>
          <div className="schedule-grid">
            <div className="schedule-day">
              <h3 className="day-title">Day 1: June 15</h3>
              <div className="schedule-item">
                <span className="time">09:00 AM</span>
                <p>Opening Keynote</p>
              </div>
              <div className="schedule-item">
                <span className="time">10:30 AM</span>
                <p>Parallel Workshops</p>
              </div>
              <div className="schedule-item">
                <span className="time">01:00 PM</span>
                <p>Networking Lunch</p>
              </div>
              <div className="schedule-item">
                <span className="time">02:30 PM</span>
                <p>Panel Discussion</p>
              </div>
            </div>
            <div className="schedule-day">
              <h3 className="day-title">Day 2: June 16</h3>
              <div className="schedule-item">
                <span className="time">09:00 AM</span>
                <p>Advanced Workshops</p>
              </div>
              <div className="schedule-item">
                <span className="time">11:00 AM</span>
                <p>Career Fair</p>
              </div>
              <div className="schedule-item">
                <span className="time">01:00 PM</span>
                <p>Lunch & Learn Sessions</p>
              </div>
              <div className="schedule-item">
                <span className="time">06:00 PM</span>
                <p>Evening Networking Event</p>
              </div>
            </div>
            <div className="schedule-day">
              <h3 className="day-title">Day 3: June 17</h3>
              <div className="schedule-item">
                <span className="time">09:00 AM</span>
                <p>Hackathon</p>
              </div>
              <div className="schedule-item">
                <span className="time">12:00 PM</span>
                <p>Judging & Awards</p>
              </div>
              <div className="schedule-item">
                <span className="time">01:30 PM</span>
                <p>Closing Remarks</p>
              </div>
              <div className="schedule-item">
                <span className="time">02:00 PM</span>
                <p>Farewell & Community Meetup</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>About Us</h4>
              <p>Empowering women in data science through education, community, and opportunity.</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#schedule">Schedule</a></li>
                <li><a href="#speakers">Speakers</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <p>Email: info@womenindatascience.com</p>
              <p>Phone: (555) 123-4567</p>
            </div>
            <div className="footer-section">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="#twitter">Twitter</a>
                <a href="#linkedin">LinkedIn</a>
                <a href="#facebook">Facebook</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Women in Data Science. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
