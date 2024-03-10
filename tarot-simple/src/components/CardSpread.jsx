// import { useContext } from "react";
// import CardsContext from "../contexts";
import SpreadTriangle from "./spreads/SpreadTriangle";
import SpreadYesOrNo from "./spreads/SpreadYesOrNo";
import SpreadElement from "./spreads/SpreadElement";
import SpreadCelticCross from "./spreads/SpreadCelticCross";
import SpreadStar from "./spreads/SpreadStar";

export default function CardSpread() {
  // const { state } = useContext(CardsContext);
  return (
    <div>
      <h2>Card Spread</h2>
      {/* {state.combination === "0" ? <Spreads.SpreadTriangle /> : (
      state.combination === "1" ? <Spreads.SpreadYesOrNo /> : (
      state.combination === "2" ? <Spreads.SpreadElement /> : (
      state.combination === "3" ? <Spreads.SpreadCelticCross /> : (
      state.combination === "4" ? <Spreads.SpreadStar /> : <div>No Combinations</div>
      ))))} }*/}
      {/* <SpreadTriangle />
      <SpreadYesOrNo />
      <SpreadElement /> */}
      <SpreadCelticCross />
      {/* <SpreadStar /> */}
    </div>
  );
}
