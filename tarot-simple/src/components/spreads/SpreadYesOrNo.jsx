import { useContext } from "react";
import CardsContext from "../../contexts";
import GridCardItem from "../../GridCardItem";

export default function SpreadYesOrNo() {
  const { state } = useContext(CardsContext);

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
              <GridCardItem card={state.cards[0]} />
            </td>
            <td />
            <td />
            <td />
            <td>
              <GridCardItem card={state.cards[1]} />
            </td>
          </tr>
          <tr>
            <td />
            <td>
              <GridCardItem card={state.cards[2]} />
            </td>
            <td />
            <td>
              <GridCardItem card={state.cards[3]} />
            </td>
            <td />
          </tr>
          <tr>
            <td />
            <td />
            <td>
              <GridCardItem card={state.cards[4]} />
            </td>
            <td />
            <td />
          </tr>
        </tbody>
      </table>
    </div>
  );
}
