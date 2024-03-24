import { useContext } from "react";
import CardsContext from "../../contexts";
import GridCardItem from "../../GridCardItem";

export default function SpreadStar() {
  const { state } = useContext(CardsContext);

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
            <GridCardItem card={state.cards[0]} />
          </td>
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td />
          <td />
          <td>
            <GridCardItem card={state.cards[1]} />
          </td>
          <td />
          <td>
            <GridCardItem card={state.cards[2]} />
          </td>
          <td />
          <td />
        </tr>
        <tr>
          <td />
          <td>
            <GridCardItem card={state.cards[3]} />
          </td>
          <td />
          <td />
          <td />
          <td>
            <GridCardItem card={state.cards[4]} />
          </td>
          <td />
        </tr>
        <tr>
          <td>
            <GridCardItem card={state.cards[5]} />
          </td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td>
            <GridCardItem card={state.cards[6]} />
          </td>
        </tr>
        <tr>
          <td />
          <td>
            <GridCardItem card={state.cards[7]} />
          </td>
          <td />
          <td />
          <td />
          <td>
            <GridCardItem card={state.cards[8]} />
          </td>
          <td />
        </tr>
        <tr>
          <td />
          <td />
          <td>
            <GridCardItem card={state.cards[9]} />
          </td>
          <td />
          <td>
            <GridCardItem card={state.cards[10]} />
          </td>
          <td />
          <td />
        </tr>
        <tr>
          <td />
          <td />
          <td />
          <td>
            <GridCardItem card={state.cards[11]} />
          </td>
          <td />
          <td />
          <td />
        </tr>
      </table>
    </div>
  );
}
