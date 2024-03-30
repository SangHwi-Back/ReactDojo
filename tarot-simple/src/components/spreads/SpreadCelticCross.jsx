import { useContext } from "react";
import CardsContext from "../../contexts";
import SimpleCard from "../../SimpleCard";

export default function SpreadCelticCross() {
  const { state } = useContext(CardsContext);
  const selectedCards = state.selectedIndexes.map(
    (index) => state.cards[index]
  );
  console.log(selectedCards.count);
  if (selectedCards.length < 10) {
    return (
      <div>
        <h2>Celtic Cross</h2>
        <p>Not enough cards</p>
      </div>
    );
  }

  return (
    <div className="flex flex-row items-center">
      <SimpleCard card={selectedCards[0]} />
      <div className="flex flex-col items-center">
        <SimpleCard card={selectedCards[1]} />
        <SimpleCard
          className="relative"
          card={selectedCards[2]}
          childrenThatCrossed={<SimpleCard card={selectedCards[3]} />}
        />
        <SimpleCard card={selectedCards[4]} />
      </div>
      <SimpleCard card={selectedCards[5]} />
      <div className="flex flex-col">
        <SimpleCard card={selectedCards[6]} />
        <SimpleCard card={selectedCards[7]} />
        <SimpleCard card={selectedCards[8]} />
        <SimpleCard card={selectedCards[9]} />
      </div>
    </div>
  );
}
