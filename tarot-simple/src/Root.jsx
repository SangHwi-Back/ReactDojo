import { RouterProvider } from "react-router-dom";
import router from "./router";
import CardsContext from "./contexts";
import data from "./data";
import { useReducer } from "react";

export default function Root() {
  const cards = data.cards;
  function reducer(state, action) {
    switch (action.type) {
      case "setTheme":
        return { ...state, theme: action.theme };
      case "setCombination":
        return { ...state, combination: action.combination };
      case "setSelectedIndex":
        const newCards = state.cards.map((card, index) =>
          index === action.selectedIndex ? { ...card, isSelected: true } : card
        );
        return { ...state, cards: newCards };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    cards: cards,
    theme: null,
    combination: null,
  });

  return (
    <>
      <CardsContext.Provider value={{ state, dispatch }}>
        <RouterProvider router={router} />
      </CardsContext.Provider>
    </>
  );
}
