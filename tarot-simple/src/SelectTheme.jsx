import RadioListTheme from "./RadioListTheme";
import data from "./data";

export default function SelectTheme({ setTheme }) {
  return (
    <div>
      <p className="mb-2">Select Theme</p>
      <RadioListTheme
        arr={data.themes}
        setter={setTheme}
      />
    </div>
  );
}
