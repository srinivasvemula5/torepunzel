import React, { useState } from "react";

type Props = {
  accepted: boolean;
  setAccepted: React.Dispatch<React.SetStateAction<boolean>>;
  onNext: () => void;
  onBack: () => void;
};

const page3Data = [
  {
    id: 1,
    title: "Have your favourite food 💖",
    description:
      "Together we can have your favorite food, savor every bite, and enjoy it like it’s the best thing in the world. Even if you’re mad at me, we can go out and have your favorite food to make up, and just like that, turn any bad moment into a happy one. I want to share all those little food moments with you, laugh while eating, and make every meal a memory that’s just ours.",
    img: "/images/love1.jpg",
  },
  {
    id: 2,
    title: "Watch your favourite shows 🌟",
    description:
      "Together we can watch your favorite shows, just sit back and relax, laugh at the funny parts, and get really into the story. I love the idea of sharing those little moments with you, talking about the episodes, reacting to the scenes, and just enjoying it all together. Honestly, watching with you makes everything so much more fun and special.",
    img: "/images/love2.jpg",
  },
  {
    id: 3,
    title: "Have long nap sessions cuddling each other 👀",
    description:
      "Together we can have nap sessions with cuddles, just lying there and being cozy. I love the idea of resting with you in my arms, feeling completely relaxed and safe, and waking up just a little happier because we’re together. Those simple, quiet moments with you would honestly be my favorite part of the day.",
    img: "/images/love3.jpg",
  },
  {
    id: 4,
    title: "Co-parent our pets ✨",
    description:
      "Together we can have a pet and take care of it side by side, sharing all the little moments and responsibilities. I can picture us laughing at the silly things it does, spoiling it just a little too much, and making so many memories together. Having a little furry friend with us would make life feel even warmer and more fun.",
    img: "/images/love4.jpg",
  },
  {
    id: 5,
    title: "Go for late night long drives 🌉♥",
    description:
      "Together we can go on late-night rides, just the two of us with the road ahead and the stars above. I can imagine us laughing, talking about anything and everything, or just enjoying the quiet moments together. Those little adventures, with music in the background and you by my side, would honestly be some of my favorite memories.",
    img: "/images/love5.jpg",
  },
  {
    id: 6,
    title: "Support each other in every possible way 🌉",
    description:
      "Together we can support each other, through every little challenge and every big moment. I want us to be there for one another, to lift each other up, celebrate the wins, and hold each other through the tough times. Knowing we’ve got each other’s backs would make everything feel lighter and more meaningful.",
    img: "/images/love6.jpg",
  },
];

function Page3({ accepted, setAccepted, onNext, onBack }: Props) {
  const [selected, setSelected] = useState<number | null>(null);

  const handleSelect = (id: number) => {
    setSelected(prev => (prev === id ? null : id));
    if (!accepted) setAccepted(true); // auto-accept on click
  };

  return (
    <div className="page page3">
      <h2 className="subtitle">What we can do together 💖</h2>

      {!selected ? (
        <div className="card-grid">
          {page3Data.map(card => (
            <div
              key={card.id}
              className="love-card"
              onClick={() => handleSelect(card.id)}
            >
              <img src={card.img} alt={card.title} />
              <h3>{card.title}</h3>
              <p>💌 Click to read 💌</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="detail-view">
          <div className="detail-text">
            <h2>{page3Data[selected - 1].title}</h2>
            <p>{page3Data[selected - 1].description}</p>
            <button onClick={() => setSelected(null)} className="love-button">
              Back to cards
            </button>
          </div>
          <div className="detail-image">
            <img src={page3Data[selected - 1].img} alt="detail" />
          </div>
        </div>
      )}

      <div className="nav-buttons">
        <button className="love-button" onClick={onBack}>
          ⬅ Back
        </button>
        <button
          className="love-button"
          onClick={onNext}
          disabled={!accepted} // enabled once a card is clicked
        >
          Finally ➡️
        </button>
      </div>
    </div>
  );
}

export default Page3;
