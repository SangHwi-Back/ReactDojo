import SelectTheme from "./SelectTheme";
import SelectCombination from "./SelectCombination";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CardsContext from "./contexts";

export default function SelectConditions() {
  const { state, dispatch } = useContext(CardsContext);
  const selectDisabled = state.theme == null || state.combination == null;

  function initialRefresh() {
    dispatch({ type: 'refresh' });
  }

  initialRefresh();
  return (
    <>
      <div className="flex gap-6 mb-4">
        <SelectTheme
          setTheme={(value) => dispatch({ type: "setTheme", theme: value })}
          className="flex-col"
        />
        <SelectCombination
          setCombination={(value) =>
            dispatch({ type: "setCombination", combination: value })
          }
          className="flex-col"
        />
      </div>
      {selectDisabled ? (
        <span className="bg-blue-50 hover:bg-blue-200 text-gray-500 font-bold py-2 px-4 rounded cursor-not-allowed">
          선택하기
        </span>
      ) : (
        <Link
          to="/SelectCard/0"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
        >
          시작하기
        </Link>
      )}
    </>
  );
}
