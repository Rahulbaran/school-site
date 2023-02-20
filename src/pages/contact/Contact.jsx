export default function Contact() {
  return (
    <div className="contact-wrapper">
      <header className="contact-header page-header">
        <h1>Contact</h1>
      </header>

      <div className="contact-info-wrapper">
        <main className="contact-info-container">
          <h2>Contact Information</h2>
          <p>
            You can get in touch with us via any mode of communication like
            email, telephone or direct visit. In case of direct visit, We are
            available from <strong>Sundary</strong> to <strong>Friday</strong>{" "}
            in between <strong>08:50 pm</strong> to <strong>01:25pm</strong>.
          </p>

          <div className="contact-medium-container">
            <a
              href="mailto:prayaasindia@gmail.com"
              className="email-link flex align-center"
              title="mail us"
            >
              <i className="ri-mail-line"></i>
              <span>prayaasindia@gmail.com</span>
            </a>

            <a
              href="tel:11234567565"
              className="contact-number-link flex align-center"
              title="contact us"
            >
              <i className="ri-phone-line"></i>
              <span>+91 11234567565</span>
            </a>

            <address>
              <i className="ri-home-4-line"></i>
              <span>
                Main Center, Near BIT Sindri, Dhanbad (Jharkhand), 828123
              </span>
            </address>
          </div>
        </main>

        <aside className="contact-form-container">
          <h2>Contact Form</h2>

          <form
            className="form"
            autoComplete="off"
            autoCapitalize="off"
            spellCheck="false"
          >
            <div className="form-group">
              <label htmlFor="fullname">Fullname</label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                placeholder="enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact">Contact Number</label>
              <input
                type="number"
                name="contact"
                id="contact"
                placeholder="enter your mobile number"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="comment">Comment</label>
              <textarea
                name="comment"
                id="comment"
                cols="30"
                rows="10"
              ></textarea>
            </div>

            <button className="btn primary-btn" type="submit">
              Submit
            </button>
          </form>
        </aside>
      </div>
    </div>
  );
}
