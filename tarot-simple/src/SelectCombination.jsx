import RadioListTheme from "./RadioListTheme";

export default function SelectCombination({ setCombination }) {
  return (
    <div>
      <p class="mb-2">Select Combination</p>
      <RadioListTheme
        arr={[
          {
            name: "select_combination",
            value: "0",
            labelStr: "성 삼각 전개법 : 간단한 질문에 대한 대답",
          },
          {
            name: "select_combination",
            value: "1",
            labelStr: "양자택일 전개법 : 두 가지 선택지에 대한 대답",
          },
          {
            name: "select_combination",
            value: "2",
            labelStr: "엘리멘트 전개법 : 문제에 대한 힌트가 궁금할 때",
          },
          {
            name: "select_combination",
            value: "3",
            labelStr: "켈틱크로스 전개법 : 문제에 대한 상세한 대답이 필요할 때",
          },
          {
            name: "select_combination",
            value: "4",
            labelStr:
              "별자리 전개법 : 전체적인 운세를 알고 싶은 경우(제일 비쌈)",
          },
        ]}
        setter={setCombination}
      />
    </div>
  );
}
