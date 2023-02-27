/* Components */
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";

export default function Contact() {
  return (
    <div className="contact-wrapper">
      <header className="contact-header page-header">
        <h1>Contact</h1>
      </header>

      <div className="contact-info-wrapper">
        <ContactInfo />
        <ContactForm />
        <ContactMap />
      </div>
    </div>
  );
}
