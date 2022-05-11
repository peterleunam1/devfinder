import "./items.scss";

export default function Item({ icon, description }) {
  if (description === null) {
    description  = "Not Available";
  }
  return (
    <>
      <span className="span">
        <i className={icon} />
        <strong className="span__strong">{description}</strong>
      </span>
    </>
  );
}
