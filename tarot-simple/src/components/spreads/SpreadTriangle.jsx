import { useContext } from "react";
import CardsContext from "../../contexts";
import GridCardItem from "../../GridCardItem";

export default function SpreadTriangle() {
  const { state } = useContext(CardsContext);

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
              <GridCardItem card={state.cards[0]} />
            </td>
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
          </tr>
        </tbody>
      </table>
    </div>
  );
}
