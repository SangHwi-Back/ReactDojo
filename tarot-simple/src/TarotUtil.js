import data from "./data";

const TarotUtil = {
  selectedCards: (state) => {
    return state.selectedIndexes.map((index) => state.cards[index]);
  },

  printCardSpread: (state, spreadNumber, children) => {
    if (selectedCards(state).length !== data.spreads[spreadNumber].cardCount) {
      return (
        <div>
          <h2>{data.spreads[spreadNumber].name}</h2>
          <p>Not enough cards</p>
        </div>
      );
    }

    return children;
  },
};

export default TarotUtil;
