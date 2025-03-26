import "../About.css"

const About = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>About Our Academy</h1>
        <p className="subtitle">Empowering minds through excellence in education since 2010</p>
      </div>

      <div className="about-section mission-vision">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            To provide a stimulating educational environment where students develop their intellectual, social, and
            creative potential, becoming responsible global citizens.
          </p>
        </div>

        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            Building tomorrow's leaders through innovative education, critical thinking, and preparing students for the
            challenges of a rapidly changing world.
          </p>
        </div>
      </div>

      <div className="about-section values">
        <h2 className="section-title">Our Core Values</h2>
        <div className="values-container">
          <div className="value-card">
            <h3>Academic Excellence</h3>
            <p>Maintaining high standards to help students reach their full potential.</p>
          </div>

          <div className="value-card">
            <h3>Lifelong Learning</h3>
            <p>Fostering curiosity and passion for continuous learning.</p>
          </div>

          <div className="value-card">
            <h3>Inclusive Community</h3>
            <p>Creating an environment where everyone feels valued and respected.</p>
          </div>
        </div>
      </div>

      <div className="about-section cta">
        <h2>Join Our Academy</h2>
        <p>Take the first step toward a transformative educational experience.</p>
        <div className="cta-buttons">
          <button className="btn primary">Contact Us</button>
          <button className="btn secondary">Explore Courses</button>
        </div>
      </div>
    </div>
  )
}

export default About

