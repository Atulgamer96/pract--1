import React from "react";
import "../../stylesheets/PrizeCard.css";

const PrizeCard = () => {
  const prizes = [
    {
      title: "1st Prize",
      amount: "₹ 50,000/-",
      image: "./images/prizes/1st.png",
      gradient:
        "linear-gradient(to right, #fbbf24,rgb(172, 169, 169),rgb(125, 240, 146))",
    },
    {
      title: "2nd Prize",
      amount: "₹ 30,000/-",
      image: "./images/Glimpse 2k23/Winners/winners.png",
      gradient: "linear-gradient(to right, #60a5fa, #4f46e5)",
    },
    {
      title: "3rd Prize",
      amount: "₹ 20,000/-",
      image: "./images/Glimpse 2k23/Winners/winners.png",
      gradient: "linear-gradient(to right, #34d399, #14b8a6)",
    },
  ];

  return (
    <div className="prize-card-container">
      {/* <h1 className="title">🎉 Exciting Prizes Await You! 🎉</h1> */}
      <h1 className="title">
        🌟 Your <span className="gradient-text">Ideas</span>, Your{" "}
        <span className="gradient-text">Victory</span>, Your{" "}
        <span className="gradient-text">Prizes</span>! 🏅
      </h1>

      <div className="prize-cards-wrapper">
        {prizes.map((prize, index) => (
          <div
            key={index}
            className={`prize-card prize-${index + 1}`}
            // style={{ background: prize.gradient }}
          >
            <div className="prize-info">
              <img
                src={prize.image}
                alt={`${prize.title}`}
                className="prize-image"
              />
              <h2 className="prize-title">{prize.title}</h2>
              <h3 className="prize-amount">{prize.amount}</h3>
              {index === 0 && (
                <p className="prize-description">
                  Claim the ultimate victory prize!
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrizeCard;
