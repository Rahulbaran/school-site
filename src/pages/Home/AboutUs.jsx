import { Link } from "react-router-dom";
import cardsImgs from "./data/CardsData";

function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-cards-wrapper">
        <div className="card about-card flex flex-col align-center gap-3">
          <img
            loading="lazy"
            decoding="async"
            src={cardsImgs.class_img}
            alt="online class"
          />
          <h4>Online Classes</h4>
        </div>

        <div className="card about-card flex flex-col align-center gap-3">
          <img
            loading="lazy"
            decoding="async"
            src={cardsImgs.exam_img}
            alt="online examination"
          />
          <h4>Online Examination</h4>
        </div>

        <div className="card about-card flex flex-col align-center gap-3">
          <img
            loading="lazy"
            decoding="async"
            src={cardsImgs.fee_img}
            alt="online fees"
          />
          <h4>Online Fees</h4>
        </div>

        <div className="card about-card flex flex-col align-center gap-3">
          <img
            loading="lazy"
            decoding="async"
            src={cardsImgs.report_img}
            alt="online report card"
          />
          <h4>Online Report Card</h4>
        </div>
      </div>

      <div className="about-us-content">
        <h2>About Us</h2>

        <div>
          <p>
            With an experience of <em>49 years</em> in quality education, now{" "}
            <strong>Prayaas India</strong> has come with the new but trusted
            standard in the renovated premises with good class facilities
            providing education to 500 children. Apart from classes, every year
            fest is organized in the school premises.
          </p>
          <p>
            We have <strong>quality teachers with good experiences</strong> in
            the field of teaching. The school&apos;s environment provides a
            great place for overall child development.
          </p>
        </div>

        <Link className="btn secondary-btn know-more-btn" to="/about">
          Know more
        </Link>
      </div>
    </div>
  );
}

export default AboutUs;
