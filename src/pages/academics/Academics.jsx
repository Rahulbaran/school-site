import AcademicsData, { featuresLeft, featuresRight } from "./AcademicsData";

export default function Academics() {
  return (
    <div className="academics-wrapper">
      <header className="academics-header">
        <h1>Academics</h1>
      </header>

      <div className="academics-container">
        <h2>Facilities in Prayaas India</h2>

        <div className="academics-cards-container">
          {AcademicsData.map(data => (
            <div
              className="card academics-card flex flex-col align-center justify-flex-start gap-2"
              key={data.id}
            >
              <img
                src={data.src}
                alt={data.alt}
                srcSet={data.srcSet}
                loading="eager"
                decoding="sync"
              />
              <h4>{data.title}</h4>
              <p className="align-flex-start">{data.content}</p>
            </div>
          ))}
        </div>

        <h3 className="features-heading">Additional Features of the School</h3>
        <div className="academics-features-container">
          <div className="features-left-section flex flex-col gap-2">
            {featuresLeft.map(feat => (
              <div className="feature flex align-center gap-2" key={feat.id}>
                <img
                  src={feat.src}
                  alt={feat.alt}
                  loading="lazy"
                  decoding="async"
                  width="32"
                  height="32"
                />
                <span>{feat.text}</span>
              </div>
            ))}
          </div>

          <div className="features-right-section flex flex-col gap-2">
            {featuresRight.map(feat => (
              <div className="feature flex align-center gap-2" key={feat.id}>
                <img
                  src={feat.src}
                  alt={feat.alt}
                  loading="lazy"
                  decoding="async"
                  width="32"
                  height="32"
                />
                <span>{feat.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
