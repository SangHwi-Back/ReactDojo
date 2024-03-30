import { RouterProvider } from "react-router-dom";
import router from "./router";
import CardsContext from "./contexts";
import data from "./data";
import { useReducer } from "react";

export default function Root() {
  function reducer(state, action) {
    const cards = state.cards;
    switch (action.type) {
      case "setTheme":
        state.theme = action.theme;
        return { ...state, theme: action.theme };
      case "setCombination":
        let newIndexes = [];
        if (
          action.combination >= 0 &&
          action.combination < data.spreads.length
        ) {
          newIndexes = new Array(
            data.spreads[action.combination].cardCount
          ).fill(null);
        }
        return { ...state, selectedIndexes: newIndexes, combination: action.combination };
      case "setSelectedIndex":
        let selectedIndexes = state.selectedIndexes;
        let sequence = action.selectedAt;
        let cardIndex = action.cardIndex;
        if (
          sequence >= 0 && 
          sequence < selectedIndexes.length
        ) {
          selectedIndexes[sequence] = cardIndex;
        }
        console.log(selectedIndexes, action);
        return {
          ...state,
          cards: cards.map((card, index) =>
            index === cardIndex ? { ...card, isSelected: true } : card
          ),
          selectedIndexes: selectedIndexes,
        };
      case "reset":
        return {
          ...state,
          cards: cards.map((card) => ({ ...card, isSelected: false })),
          selectedIndexes: [],
          theme: null,
          combination: null,
        };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    cards: data.cards.map((card, index) => {
      card["index"] = index;
      return card;
    }),
    theme: null,
    combination: null,
    selectedIndexes: [null, null, null],
  });

  return (
    <>
      <CardsContext.Provider value={{ state, dispatch }}>
        <RouterProvider router={router} />
      </CardsContext.Provider>
    </>
  );
}
