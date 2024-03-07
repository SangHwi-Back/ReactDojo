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
      <CardGrid>
        {state.cards
          .filter((card) => !card.isSelected)
          .map((card) => {
            return (
              <div
                key={card.index}
                onClick={() => {
                  dispatch({ type: "setSelectedIndex", selectedIndex: card.index });
                  // TODO: Refactor needed. I meant to use 3 not 2.
                  if (state.selectedIndexes.filter((value) => value !== null).length === 2) {
                    navigate('/results');
                  } else {
                    navigate(nextPath);
                  }
                }}
              >
                <GridCardItem card={card} index={card.index} />
              </div>
            );
          })}
      </CardGrid>
    </div>
  );
}
