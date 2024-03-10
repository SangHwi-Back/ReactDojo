import { useContext } from "react";
import CardsContext from "../../contexts";
import GridCardItem from "../../GridCardItem";

export default function SpreadTriangle() {
  const { state } = useContext(CardsContext);
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
              <GridCardItem card={state.cards[0]} />
            </td>
          </tr>
          <tr>
            <td />
            <td>
              <GridCardItem card={state.cards[0]} />
            </td>
            <td />
          </tr>
        </tbody>
      </table>
    </div>
  );
}
