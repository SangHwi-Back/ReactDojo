import { useContext } from "react";
import CardsContext from "../contexts";
import SpreadTriangle from "./spreads/SpreadTriangle";
import SpreadYesOrNo from "./spreads/SpreadYesOrNo";
import SpreadElement from "./spreads/SpreadElement";
import SpreadCelticCross from "./spreads/SpreadCelticCross";
import SpreadStar from "./spreads/SpreadStar";

export default function CardSpread() {
  const { state } = useContext(CardsContext);
  
  return (
    <div>
      <h2>Card Spread</h2>
      {state.combination === "0" ? (
        <SpreadTriangle />
      ) : state.combination === "1" ? (
        <SpreadYesOrNo />
      ) : state.combination === "2" ? (
        <SpreadElement />
      ) : state.combination === "3" ? (
        <SpreadCelticCross />
      ) : state.combination === "4" ? (
        <SpreadStar />
      ) : (
        <div>No Combinations</div>
      )}
    </div>
  );
}
