import "./FeatureItem.css";

export default function FeatureItem({ donnee }) {
  if (!donnee) {
    return null;
  }

  const [src, h3, p] = [
    donnee[0]?.src || "default-icon.png",
    donnee[1]?.h3 || "Default Title",
    donnee[2]?.p || "Description not available",
  ];

  return (
    <>
      <img src={src} alt="Feature Icon" className="feature-icon" />
      <h3 className="feature-item-title">{h3}</h3>
      <p>{p}</p>
    </>
  );
}
