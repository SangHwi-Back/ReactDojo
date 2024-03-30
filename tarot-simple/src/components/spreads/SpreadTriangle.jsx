import { useContext } from "react";
import CardsContext from "../../contexts";
import GridCardItem from "../../GridCardItem";

export default function SpreadTriangle() {
  const { state } = useContext(CardsContext);
  const selectedCards = state.selectedIndexes.map(
    (index) => state.cards[index]
  );

  if (state.cards.length < 3) {
    return (
      <div>
        <h2>Triangle Spread</h2>
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
          </tr>
        </tbody>
      </table>
    </div>
  );
}
