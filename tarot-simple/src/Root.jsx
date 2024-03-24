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
        return { ...state, theme: action.theme };
      case "setCombination":
        return { ...state, combination: action.combination };
      case "setSelectedIndex":
        let selectedIndexes = state.selectedIndexes;
        selectedIndexes[action.selectedIndex] = action.selectedIndex;
        console.log(selectedIndexes, action.selectedIndex);
        return {
          ...state,
          cards: cards.map((card, index) =>
            index === action.selectedIndex
              ? { ...card, isSelected: true }
              : card
          ),
          selectedIndexes: selectedIndexes
        };
      case "reset":
        return {
          ...state,
          cards: cards.map((card) => ({ ...card, isSelected: false })),
          selectedIndexes: [null, null, null],
          theme: null,
          combination: null
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
    selectedIndexes: [null, null, null]
  });

  return (
    <>
      <CardsContext.Provider value={{ state, dispatch }}>
        <RouterProvider router={router} />
      </CardsContext.Provider>
    </>
  );
}
