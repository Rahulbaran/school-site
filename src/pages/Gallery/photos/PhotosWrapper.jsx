export default function PhotosWrapper({ PhotosData, handleSlider }) {
  return (
    <div className="photos-wrapper">
      {PhotosData.map(data => (
        <a
          href={data.orgSrc}
          id={`image-${data.id}`}
          key={data.id}
          onClick={handleSlider}
        >
          <img
            src={data.src}
            alt={data.alt}
            srcSet={data.srcSet}
            loading="lazy"
          />
        </a>
      ))}
    </div>
  );
}
