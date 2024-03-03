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
        return {
          ...state,
          cards: cards.map((card, index) =>
            index === action.selectedIndex
              ? { ...card, isSelected: true }
              : card
          ),
        };
      case "reset":
        return {
          ...state,
          cards: cards.map((card) => ({ ...card, isSelected: false }))
        };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    cards: data.cards,
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
