import RadioListTheme from "./RadioListTheme";
import data from "./data";

export default function SelectCombination({ setCombination }) {
  return (
    <div>
      <p className="mb-2">Select Combination</p>
      <RadioListTheme
        arr={data.spreads}
        setter={setCombination}
      />
    </div>
  );
}
