export default function LandingSection({ title, details, image }) {
  return (
    <div className="landing-section">
      <div className="mt-8 mx-16">
        <h3>{title}</h3>
        <div className="mt-4">{details}</div>
      </div>
      <div className="relative landing-image">
        {image}
      </div>
    </div>
  );
}
