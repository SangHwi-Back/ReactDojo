import { useContext } from "react";
import CardsContext from "../../contexts";
import GridCardItem from "../../GridCardItem";

export default function SpreadYesOrNo() {
  const { state } = useContext(CardsContext);
  const selectedCards = state.selectedIndexes.map(
    (index) => state.cards[index]
  );

  if (state.cards.length < 5) {
    return (
      <div>
        <h2>Yes or No Spread</h2>
        <p>Not enough cards</p>
      </div>
    );
  }

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <GridCardItem card={selectedCards[0]} />
            </td>
            <td />
            <td />
            <td />
            <td>
              <GridCardItem card={selectedCards[1]} />
            </td>
          </tr>
          <tr>
            <td />
            <td>
              <GridCardItem card={selectedCards[2]} />
            </td>
            <td />
            <td>
              <GridCardItem card={selectedCards[3]} />
            </td>
            <td />
          </tr>
          <tr>
            <td />
            <td />
            <td>
              <GridCardItem card={selectedCards[4]} />
            </td>
            <td />
            <td />
          </tr>
        </tbody>
      </table>
    </div>
  );
}
