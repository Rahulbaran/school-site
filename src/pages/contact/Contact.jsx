export default function Contact() {
  return (
    <div className="contact-wrapper">
      <header className="contact-header page-header">
        <h1>Contact</h1>
      </header>

      <main className="contact-info-container">
        <h2>Contact Information</h2>
        <p>
          You can get in touch with us via any mode of communication like email,
          telephone or direct visit. In case of direct visit, We are available
          from <strong>Sundary</strong> to <strong>Friday</strong> in between{" "}
          <strong>08:50 pm</strong> to <strong>01:25pm</strong>.
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
      <aside className="contact-form-container"></aside>
    </div>
  );
}
