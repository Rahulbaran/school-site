import PhotosData from "./PhotosData";

export default function Photos() {
  return (
    <main className="container photos-container">
      <div className="photos-wrapper">
        {PhotosData.map(data => (
          <img
            key={data.id}
            src={data.src}
            alt={data.alt}
            srcSet={data.srcSet}
            loading="lazy"
            id={`image-${data.id}`}
          />
        ))}
      </div>
    </main>
  );
}
