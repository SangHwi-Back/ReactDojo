export default function GridCardItem({ key, card }) {
  return (
    <li key={key}>
      <img src={card.img} alt={card.engName} />
      <p>{card.engName}</p>
    </li>
  )
}