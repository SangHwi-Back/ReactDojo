import { useContext } from "react";
import CardsContext from "../../contexts";
import GridCardItem from "../../GridCardItem";

export default function SpreadElement() {
  const { state } = useContext(CardsContext);
  const selectedCards = state.selectedIndexes.map(
    (index) => state.cards[index]
  );

  if (state.cards.length < 4) {
    return (
      <div>
        <h2>Element Spread</h2>
        <p>Not enough cards</p>
      </div>
    );
  }
  
  return (
    <div>
      <div className="flex justify-between">
        <div className="w-1/3">
          <GridCardItem card={selectedCards[0]} />
        </div>
        <div className="w-1/3" />
        <div className="w-1/3">
          <GridCardItem card={selectedCards[1]} />
        </div>
      </div>
      <div className="h-20" />
      <div className="flex justify-between">
        <div className="w-1/3">
          <GridCardItem card={selectedCards[2]} />
        </div>
        <div className="w-1/3" />
        <div className="w-1/3">
          <GridCardItem card={selectedCards[3]} />
        </div>
      </div>
    </div>
  );
}
