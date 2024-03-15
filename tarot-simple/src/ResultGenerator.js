import data from "./data";

const ResultGenerator = {
  getSpreadDescription: (combination) => {
    const spreadNumber = Number(combination);
    data.spreads.forEach((spread) => {
      if (spread.id === spreadNumber) {
        return spread.description;
      }
    });
    return "No Description";
  },
  getReadingTarot: (combination, cards) => {
    if (ResultGenerator.checkEnoughCards(combination, cards) === false) {
        return ["No Description"];
    }

    data.spreads.forEach((spread) => {
      if (spread.value === combination) {
        return spread.cardDescription;
      }
    });

    return ["No Description"];
  },
  checkEnoughCards: (combination, cards) => {
    const spreadNumber = Number(combination);

    data.spreads.forEach((spread) => {
      if (spread.value === spreadNumber) {
        return spread.cardCount <= cards.length;
      }
    });

    return false;
  }
};

export default ResultGenerator;