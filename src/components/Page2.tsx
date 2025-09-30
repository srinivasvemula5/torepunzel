import React, { useState } from "react";

type Props = {
  messages: string[];
  setMessages: React.Dispatch<React.SetStateAction<string[]>>;
  onNext: () => void;
  onBack: () => void;
};

function Page2({ messages, setMessages, onNext, onBack }: Props) {
  const cuteMessages = [
    {
      title: "Holding your hand Forever💓",
      description: "No matter what the situation is under any circumstances i dont wanna lose you at any cost.So yeah this is my first commitment that iam not gonna leave your hand,only if you are willing to offer me your hand👀.... "
    },
    {
      title: "Staying Focused about my career✨",
      description: "In order to have you forever i have to grow in my ways so that on one fine day ill be eligible atleast to come over your home and convince your parents to let them handover their headace to mee so that i can take care of her from nowww👀"
    },
    {
      title: "Hitting the Gym Regularly😤",
      description: "My girl being a ncc cadet and being soo fit i have to make sure i atleast keepup with you and i got the bestt girl and i feel she too deserves a lot so yeah no matter what i cant match you but ill try hard to become better.."
    },
    {
      title: "Standing by you no matter what💖",
      description: "“So no matter what path you take or what dream you chase, I’ll be right there by your side—supporting you every step of the way. Your happiness and success mean the world to me, and I’ll always cheer for you, through every challenge and every moment of doubt. I believe in you completely, and I feel so lucky to have someone as amazing as you in my life. Together, we can face anything, and I’ll always be your biggest supporter.”"
    },

  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleDescription = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="page page2">
      <h2 className="subtitle"> My Commitments for you🌸</h2>
      <div className="statement-list">
        {cuteMessages.map((msg, idx) => (
          <div key={idx} className="statement-wrapper">
            <button
              className="statement-btn"
              onClick={() => toggleDescription(idx)}
            >
              {msg.title}
            </button>
            {activeIndex === idx && (
              <p className="statement-desc">{msg.description}</p>
            )}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <button className="love-button" onClick={onBack}>⬅ Back</button>
        <button className="love-button" onClick={onNext}>Next ➡️</button>
      </div>
    </div>
  );
}

export default Page2;
