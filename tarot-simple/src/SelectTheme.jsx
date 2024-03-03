import GridCardItem from "./GridCardItem";
import data from "./data.json";

export default function SelectTheme() {
  return (
    <>
      Select Theme
      <ul class="list-disc">
        <li>
          <input type="radio" id="radio_lover" name="select_theme" value="0" />
          {"연애 / 결혼"}
        </li>
        <li>
          <input
            type="radio"
            id="radio_business"
            name="select_theme"
            value="1"
          />
          {"일 / 적성"}
        </li>
        <li>
          <input type="radio" id="radio_health" name="select_theme" value="2" />
          {"건강 / 미용"}
        </li>
        <li>
          <input
            type="radio"
            id="radio_leisure"
            name="select_theme"
            value="3"
          />
          {"레저 / 취미"}
        </li>
        <li>
          <input type="radio" id="radio_etc" name="select_theme" value="4" />
          {"기타"}
        </li>
      </ul>
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
