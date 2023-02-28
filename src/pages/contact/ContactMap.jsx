export default function ContactMap() {
  return (
    <section className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.3026401396282!2d86.03075891462858!3d23.985087885687964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f40eb079b8f671%3A0xb366a70f2c024fc9!2sPt.%20A.%20K.%20Jain%20Memorial%20School!5e0!3m2!1sen!2sin!4v1677600501628!5m2!1sen!2sin"
        width="800"
        height="600"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="location of the school"
      ></iframe>
    </section>
  );
}
