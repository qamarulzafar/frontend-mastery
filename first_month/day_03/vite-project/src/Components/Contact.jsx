import "../Contact.css"

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p className="subtitle">Get in touch with our team</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Our Information</h2>
          <div className="info-item">
            <span className="info-label">Address:</span>
            <p>123 Education Street, MAlir Colony Karachi</p>
          </div>
          <div className="info-item">
            <span className="info-label">Email:</span>
            <p>qamarsiddiqui0311@gmail.com</p>
          </div>
          <div className="info-item">
            <span className="info-label">Phone:</span>
            <p>03102236191</p>
          </div>
          <div className="info-item">
            <span className="info-label">Hours:</span>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 2:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" placeholder="Enter your name" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="Enter subject" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Enter your message"></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact

