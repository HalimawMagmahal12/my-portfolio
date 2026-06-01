export default function App() {
  const showMessage = () => {
    alert("Welcome to John Bernard's Portfolio!");
  };
  const skillList = ["Basic Python", "Basic Java", "Picture Editing", "HTML & CSS"];
  return (
    <div className="single-page-wrapper">
      <div className="unified-portfolio-card animate-fade">

      <header className="hero-section">
        <div className="hero-content-left">
          <p className="section-tag">Portfolio</p>
          <h1>Hi There!</h1>
          <h2>I'm John Bernard C. Adayo</h2>
          <p className="email-badge">johnbernardadayo@gmail.com</p>
        </div>
  
        <div className="image-container-right">
          <img src="/jb.jpg" alt="John Bernard" />
        </div>
      </header>

        <hr className="section-divider" />

        <section className="info-block">
          <h3>About Me</h3>
          <p>
            I am 20 years old from Tala, Caloocan. I am a 3rd year college student 
            from STI taking up Bachelor of Science in Information Technology. 
          </p>
          <p>
            One thing about me is that I enjoy riding bicycles. Biking helps me relax 
            and gives me peace, happiness, and calmness no matter what kind of day I have.
          </p>
        </section>

        <hr className="section-divider" />

        <section className="info-block">
          <h3>Education</h3>
          <div className="education-timeline">
            <div className="timeline-item">
              <span className="icon">🏫</span>
              <div>
                <strong>Senior High School</strong>
                <p>STI San Jose Del Monte Bulacan</p>
              </div>
            </div>
            <div className="timeline-item">
              <span className="icon">🎓</span>
              <div>
                <strong>College</strong>
                <p>STI San Jose Del Monte Bulacan (3rd Year BSIT)</p>
              </div>
            </div>
          </div>
        </section>

        <hr className="section-divider" />

        <section className="info-block">
          <h3>My Skills</h3>
          <div className="skills-grid">
            {skillList.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <hr className="section-divider" />

        <footer className="card-footer">
          <div className="social-accounts-bar">
            <p>Connect:</p>
            <div className="account-links">
              <a href="https://www.facebook.com/johnbernard.adayo" target="_blank" rel="noreferrer" className="social-icon-btn">
                <img src="/facebook.png" alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/jshn_brnrd" target="_blank" rel="noreferrer" className="social-icon-btn">
                <img src="/instagram.png" alt="Instagram" />
              </a>
            </div>
          </div>
          
          <button className="action-btn" onClick={showMessage}>Click Me</button>
        </footer>
      </div>
    </div>
  );
}