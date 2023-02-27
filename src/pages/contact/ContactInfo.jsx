export default function ContactInfo() {
  return (
    <main className="contact-info-container">
      <h2>Contact Information</h2>
      <p>
        You can get in touch with us via any mode of communication like email,
        telephone or direct visit. In case of direct visit, We are available
        from <strong>Sundary</strong> to <strong>Friday</strong> in between{" "}
        <strong>08:50 pm</strong> to <strong>01:25pm</strong>.
      </p>

      <div className="contact-medium-container flex flex-col align-flex-start gap-1">
        <a
          href="mailto:prayaasindia@gmail.com"
          className="email-link flex align-center gap-1"
          title="mail us"
        >
          <i className="ri-mail-line"></i>
          <span>prayaasindia@gmail.com</span>
        </a>

        <a
          href="tel:11234567565"
          className="contact-number-link flex align-center gap-1"
          title="contact us"
        >
          <i className="ri-phone-line"></i>
          <span>+91 11234567565</span>
        </a>

        <address className="flex align-center gap-1">
          <i className="ri-home-4-line"></i>
          <span>Main Center, Near BIT Sindri, Dhanbad (Jharkhand)</span>
        </address>
      </div>
    </main>
  );
}
