import imgUrl from "./data/SchoolInfoData";

export default function SchoolInfo() {
  return (
    <div className="school-info-container">
      <div className="school-info-image-wrapper">
        <img
          src={imgUrl}
          alt="education illustration"
          decoding="async"
          loading="lazy"
        />
      </div>

      <div className="school-info">
        <h2>Hassle Free Quality Education</h2>
        <p>
          Education is fundamental to an equitable society. An excellent
          education equips children and youth with the knowledge, skills,
          values, and mindsets needed to be empowered individuals and
          responsible citizens. The fact that a high-quality education has
          wide-ranging benefits for individuals and societies has been
          demonstrated, time and again, by countries across the world. With
          nearly 1 in 4 people below the age of 14 years.
        </p>
        <p>
          With an Experience of <em>49 Years</em> in quality education, Now{" "}
          <strong>Prayaas India</strong> has come with the new but trusted
          standard in the renovated premises with good class facilities. It is a
          name to reckon with in the arena of education. It is synonymous with
          providing quality deucation, encouragement in co-curricular
          activities, a sharp inclination towards sports and also in inculcating
          a sense of responsibility towards the society.
        </p>
      </div>
    </div>
  );
}