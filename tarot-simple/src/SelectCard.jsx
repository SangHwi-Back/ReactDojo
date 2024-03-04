import GridCardItem from "./GridCardItem";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import CardsContext from "./contexts";
import CardGrid from "./CardGrid";

export default function SelectCard() {
  const { sequence } = useParams();
  const { state, dispatch } = useContext(CardsContext);
  const nextPath =
    sequence < 3 ? `/selectCard/${Number(sequence) + 1}` : "/results";
  const navigate = useNavigate();

  return (
    <div>
      <h1>Select a card</h1>
      <p>Click on a card to see its details</p>
      <button
        onClick={() => dispatch({ type: "setSelectedIndex", selectedIndex: 0 })}
      >
        Reset
      </button>
      <CardGrid>
        {state.cards
          .filter((card) => !card.isSelected)
          .map((card, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  dispatch({ type: "setSelectedIndex", selectedIndex: index });
                  navigate(nextPath);
                }}
              >
                <GridCardItem card={card} index={index} />
              </div>
            );
          })}
      </CardGrid>
    </div>
  );
}
