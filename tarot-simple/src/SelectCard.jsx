import GridCardItem from "./GridCardItem";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import CardsContext from "./contexts";
import CardGrid from "./CardGrid";

export default function SelectCard() {
  const seq = Number(useParams().sequence);
  const { state, dispatch } = useContext(CardsContext);
  const nextPath = `/selectCard/${seq + 1}`;
  const navigate = useNavigate();

  return (
    <div>
      <h1>Select {seq+1} of {state.selectedIndexes.length} card</h1>
      <p>Click on a card to see its details</p>
      <CardGrid>
        {state.cards
          .filter((card) => !card.isSelected)
          .map((card) => {
            return (
              <div
                key={card.index}
                onClick={() => {
                  dispatch({
                    type: "setSelectedIndex",
                    cardIndex: card.index,
                    selectedAt: seq,
                  });

                  if (state.selectedIndexes.includes(null) === false) {
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
