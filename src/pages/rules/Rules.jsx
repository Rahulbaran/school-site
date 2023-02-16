import RulesData from "./RulesData";

export default function Rules() {
  return (
    <div className="rules-wrapper">
      <header className="rules-header page-header">
        <h1>Rules</h1>
      </header>
      <div className="rules-container">
        <h2>Rules & Regulations to follow</h2>

        <div className="rules-cards-container">
          {RulesData.map(data => (
            <div
              className="card rules-card flex flex-col align-center justify-flex-start gap-2"
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
              {data.heading && <p>{data.heading}</p>}
              <ul>
                {data.content.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
