import RadioListTheme from "./RadioListTheme";

export default function SelectTheme({ setTheme }) {
  return (
    <div>
      <p className="mb-2">Select Theme</p>
      <RadioListTheme
        arr={[
          {
            name: "select_theme",
            value: "0",
            labelStr: "연애 / 결혼",
          },
          {
            name: "select_theme",
            value: "1",
            labelStr: "일 / 적성",
          },
          {
            name: "select_theme",
            value: "2",
            labelStr: "건강 / 미용",
          },
          {
            name: "select_theme",
            value: "3",
            labelStr: "레저 / 취미",
          },
          {
            name: "select_theme",
            value: "4",
            labelStr: "기타",
          },
        ]}
        setter={setTheme}
      />
    </div>
  );
}
