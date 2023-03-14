import React from "react";
import "./Cardlist.css";
import Card from "../Card/Card";

function CardList() {
  const cards = [
    {
      title: "Affordable Flight Bookings",
      description:
        "Looking for a last-minute cheapest flight deal or the best return flights? To help you with the cheapest airfare, we consider low-cost air carriers you can do great savings on airline tickets.",
    },
    {
      title: "Flight Change with Best Deals",
      description:
        "Enjoy great savings on flight changes with the lowest airfares. By comparing flight rescheduling deals on hundreds of airline tickets, you can change your existing flight and get the price difference back into your account.",
    },
    {
      title: "Flight Cancellation with Full Refund",
      description:
        "Do you need to cancel your flight but are concerned about losing money? As per air carrier policies, you are entitled to get your money back regardless of the type and class of your airfare.",
    },
    {
      title: "Alter the Incorrect Name on The Ticket",
      description:
        "It is viable to alter the misspelt name on your flight ticket already issued with the quick assistance of our travel representatives.",
    },
  ];

  return (
    <div className="cardlist">
      <div className="tcard_tr">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            icon={card.icon}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}

export default CardList;
