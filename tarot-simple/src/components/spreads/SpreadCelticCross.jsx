import { useContext } from "react";
import CardsContext from "../../contexts";
import SimpleCard from "../../SimpleCard";

export default function SpreadCelticCross() {
  const { state } = useContext(CardsContext);

  return (
    <div className="flex justify-center">
      <SimpleCard card={state.cards[0]} />
      <div>
        <SimpleCard card={state.cards[0]} />
        <div>
          <SimpleCard className="absolute" card={state.cards[0]} />
          <SimpleCard
            className="absolute"
            card={state.cards[0]}
            isCrossed={true}
          />
        </div>
        <SimpleCard card={state.cards[0]} />
      </div>
      <SimpleCard card={state.cards[0]} />
      <div>
        <SimpleCard card={state.cards[0]} />
        <SimpleCard card={state.cards[0]} />
        <SimpleCard card={state.cards[0]} />
        <SimpleCard card={state.cards[0]} />
      </div>
    </div>
  );
}
