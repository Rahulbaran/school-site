import AboutData from "./AboutData";

export default function About() {
  const imgs = AboutData.map(image => {
    return (
      <img
        src={image.img.src}
        alt={image.img.alt}
        srcSet={image.img.srcset}
        loading="lazy"
        decoding="async"
        key={image.img.id}
      />
    );
  });

  return (
    <div className="about-wrapper">
      <header className="about-header page-header">
        <h1>About Us</h1>
      </header>

      <main className="container about-container">
        <section className="about-imgs-section">{imgs}</section>
        <section className="about-content-section">
          <p>
            A nation can never develop only by the resources and technology. It
            develops in real manner when education is in reach of everyone, when
            spark of learning is ignited in heart of every child. Each of them
            is inspired to a new level of thinking about who they are, they have
            ability to change their lives. They can also present themselves more
            effectively and successfully in front of the world.
          </p>

          <p>
            This is what Prayaas India does. We have been working in this field
            for <em>49 years</em> and provides{" "}
            <strong>high-quality education</strong> to the children. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Impedit blanditiis sint
            quod voluptas numquam assumenda perferendis voluptate provident
            tempora ratione!.
          </p>

          <p>
            To complete this mission of educate India we believe in 5
            &lsquo;P&rsquo;
            <strong>
              <ol>
                <li>Purpose</li>
                <li>Planning</li>
                <li>Perseverance</li>
                <li>Passion</li>
                <li>Pride</li>
              </ol>
            </strong>
          </p>

          <p>
            <strong>Prayaas India</strong> is built in the heart of the city -
            Sindri. The Building is set in a greenery and pollution free area
            providing open space and fresh air giving it a wholesome ambiance
            necessary for a child&lsquo;s allround development
          </p>

          <p>
            As we know, only studies will not lead to all-round development of
            children. Our main objective is not only to provide good education
            to children but also to provide them a platform to showcase their
            talents. They could not understand the shear importance of education
            in the upliftment of society. That was When the impassioned thought
            of providing free quality education to the nearby children came to
            their mind.
          </p>
        </section>
      </main>
    </div>
  );
}
