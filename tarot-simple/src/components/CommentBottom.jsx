import { useContext } from "react";
import CardsContext from "../contexts";

export default function CommentBottom() {
  const { state } = useContext(CardsContext);
  const theme = state.theme;
  const combination = state.combination;
  const selectedCards = state.selectedIndexes.map(
    (index) => state.cards[index]
  );

  if (!theme && !combination) {
    return (
      <div>
        <h2>Comment</h2>
        <p>No theme and combination selected</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Comment</h2>
      <ul>
        {selectedCards.map((card, index) => {
          return <li key={index}>{card.meanings.past}</li>;
        })}
      </ul>
    </div>
  );
}
