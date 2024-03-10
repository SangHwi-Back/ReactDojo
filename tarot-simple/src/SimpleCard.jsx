export default function SimpleCard({ card, isCrossed }) {
  return (
    <img
      className={isCrossed ? "rotate-90 absolute" : ""}
      src={card.img}
      alt={card.engName}
    />
  );
}
