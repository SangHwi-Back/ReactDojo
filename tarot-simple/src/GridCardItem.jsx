export default function GridCardItem({ key, card, isCrossed }) {
  return (
    <li key={key}>
      <img className={isCrossed ? 'rotate-90' : ''} src={card.img} alt={card.engName} />
      <p>{card.engName}</p>
    </li>
  )
}