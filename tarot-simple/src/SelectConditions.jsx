import SelectTheme from "./SelectTheme";
import SelectCombination from "./SelectCombination";
import GridCardItem from "./GridCardItem";
import data from "./data.json";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SelectConditions() {
  const [currentTheme, setTheme] = useState(null);
  const [currentCombination, setCombination] = useState(null);
  const selectDisabled = currentTheme == null || currentCombination == null;

  return (
    <>
      <div class="flex gap-6 mb-4">
        <SelectTheme setTheme={setTheme} class="flex-col" />
        <SelectCombination setCombination={setCombination} class="flex-col" />
      </div>
      {selectDisabled ? (
        <span class="bg-blue-50 hover:bg-blue-200 text-gray-500 font-bold py-2 px-4 rounded cursor-not-allowed">
          선택하기
        </span>
      ) : (
        <Link
          to="/SelectCard"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
        >
          시작하기
        </Link>
      )}

      <ul>
        <div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {data.cards.map((card, index) =>
            GridCardItem({ key: index, card: card })
          )}
        </div>
      </ul>
    </>
  );
}
