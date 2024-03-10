import { useContext } from "react";
import CardsContext from "../../contexts";
import GridCardItem from "../../GridCardItem";

export default function SpreadStar() {
  const { state } = useContext(CardsContext);
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
            <GridCardItem card={state.cards[0]} />
          </td>
          <td />
          <td>
            <GridCardItem card={state.cards[0]} />
          </td>
          <td />
          <td />
        </tr>
        <tr>
          <td />
          <td>
            <GridCardItem card={state.cards[0]} />
          </td>
          <td />
          <td />
          <td />
          <td>
            <GridCardItem card={state.cards[0]} />
          </td>
          <td />
        </tr>
        <tr>
          <td>
            <GridCardItem card={state.cards[0]} />
          </td>
          <td />
          <td />
          <td />
          <td />
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
          <td />
          <td />
          <td>
            <GridCardItem card={state.cards[0]} />
          </td>
          <td />
        </tr>
        <tr>
          <td />
          <td />
          <td>
            <GridCardItem card={state.cards[0]} />
          </td>
          <td />
          <td>
            <GridCardItem card={state.cards[0]} />
          </td>
          <td />
          <td />
        </tr>
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
      </table>
    </div>
  );
}
