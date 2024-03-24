import { useContext } from "react";
import CardsContext from "../../contexts";
import SimpleCard from "../../SimpleCard";

export default function SpreadCelticCross() {
  const { state } = useContext(CardsContext);

  if (state.cards.length < 10) {
    return (
      <div>
        <h2>Celtic Cross</h2>
        <p>Not enough cards</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center">
      <SimpleCard card={state.cards[0]} />
      <div className="flex flex-col items-center">
        <SimpleCard card={state.cards[1]} />
        <SimpleCard
          className="w-full"
          card={state.cards[2]}
          childrenThatCrossed={<SimpleCard card={state.cards[3]} />}
        />
        <SimpleCard card={state.cards[4]} />
      </div>
      <SimpleCard card={state.cards[5]} />
      <div className="flex flex-col items-center">
        <SimpleCard card={state.cards[6]} />
        <SimpleCard card={state.cards[7]} />
        <SimpleCard card={state.cards[8]} />
        <SimpleCard card={state.cards[9]} />
      </div>
    </div>
  );
}
