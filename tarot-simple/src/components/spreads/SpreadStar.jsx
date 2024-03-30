import { useContext } from "react";
import CardsContext from "../../contexts";
import GridCardItem from "../../GridCardItem";

export default function SpreadStar() {
  const { state } = useContext(CardsContext);
  const selectedCards = state.selectedIndexes.map(
    (index) => state.cards[index]
  );
    
  if (state.cards.length < 12) {
    return (
      <div>
        <h2>Star Spread</h2>
        <p>Not enough cards</p>
      </div>
    );
  }

  return (
    <div>
      <table>
        <tr>
          <td />
          <td />
          <td />
          <td>
            <GridCardItem card={selectedCards[0]} />
          </td>
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td />
          <td />
          <td>
            <GridCardItem card={selectedCards[1]} />
          </td>
          <td />
          <td>
            <GridCardItem card={selectedCards[2]} />
          </td>
          <td />
          <td />
        </tr>
        <tr>
          <td />
          <td>
            <GridCardItem card={selectedCards[3]} />
          </td>
          <td />
          <td />
          <td />
          <td>
            <GridCardItem card={selectedCards[4]} />
          </td>
          <td />
        </tr>
        <tr>
          <td>
            <GridCardItem card={selectedCards[5]} />
          </td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td>
            <GridCardItem card={selectedCards[6]} />
          </td>
        </tr>
        <tr>
          <td />
          <td>
            <GridCardItem card={selectedCards[7]} />
          </td>
          <td />
          <td />
          <td />
          <td>
            <GridCardItem card={selectedCards[8]} />
          </td>
          <td />
        </tr>
        <tr>
          <td />
          <td />
          <td>
            <GridCardItem card={selectedCards[9]} />
          </td>
          <td />
          <td>
            <GridCardItem card={selectedCards[10]} />
          </td>
          <td />
          <td />
        </tr>
        <tr>
          <td />
          <td />
          <td />
          <td>
            <GridCardItem card={selectedCards[11]} />
          </td>
          <td />
          <td />
          <td />
        </tr>
      </table>
    </div>
  );
}
