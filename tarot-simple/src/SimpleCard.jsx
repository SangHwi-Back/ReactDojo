import React from "react";

export default function SimpleCard({ card, childrenThatCrossed }) {
  const isCrossed = Boolean(childrenThatCrossed);

  return (
    <div
      className={`relative 
      ${isCrossed ? "w-31.25" : "w-25"} 
      ${isCrossed ? "aspect-[1/1]" : "aspect-[1/1.25]"}`}
    >
      {isCrossed ? (
        <>
          <div className="absolute">
            <img src={card.img} alt={card.engName} />
          </div>
          <div className="transform rotate-90">
            {childrenThatCrossed}
          </div>
        </>
      ) : (
        <img src={card.img} alt={card.engName} />
      )}
    </div>
  );
}
