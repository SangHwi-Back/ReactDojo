import GridCardItem from "./GridCardItem";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import CardsContext from "./contexts";

export default function SelectCard() {
  const { sequence } = useParams();
  const { state, dispatch } = useContext(CardsContext);
  const nextPath =
    sequence < 3 ? `/selectCard/${Number(sequence) + 1}` : "/result";
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
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 list-none">
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
      </div>
    </div>
  );
}
