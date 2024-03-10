import { useContext } from "react";
import CardsContext from "../../contexts";
import GridCardItem from "../../GridCardItem";

export default function SpreadElement() {
  const { state } = useContext(CardsContext);
  return (
    <div>
      <div className="flex justify-between">
        <div className="w-1/3">
          <GridCardItem card={state.cards[0]} />
        </div>
        <div className="w-1/3" />
        <div className="w-1/3">
          <GridCardItem card={state.cards[0]} />
        </div>
      </div>
      <div className="h-20" />
      <div className="flex justify-between">
        <div className="w-1/3">
          <GridCardItem card={state.cards[0]} />
        </div>
        <div className="w-1/3" />
        <div className="w-1/3">
          <GridCardItem card={state.cards[0]} />
        </div>
      </div>
    </div>
  );
}
