import { useContext } from "react";
import CardsContext from "./contexts";
import GridCardItem from "./GridCardItem";
import CardGrid from "./CardGrid";

export default function Results() {
    const { state } = useContext(CardsContext);
    let selectedCards = [];

    for (let i = 0; i < state.selectedIndexes.filter((value) => value !== null).length; i++) {
        selectedCards.push(state.cards[state.selectedIndexes[i]]);
    }

    return (
        <div>
            <h1>Results</h1>
            <p>Here are your selected cards:</p>
            <CardGrid>
                {selectedCards.map((card, index) => {
                    return (
                        <div key={index}>
                            <GridCardItem card={card} index={index} />
                        </div>
                    );
                })}
            </CardGrid>
        </div>
    );
}