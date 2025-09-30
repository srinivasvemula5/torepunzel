import React, { useState } from "react";
import "./Love.css";

interface Page1Props {
  onNext: () => void;
  onBack: () => void;
}

const cardData = [
  {
    id: 1,
    title: "Being Pretty long hair Girl",
    caption: "💌 Click to read 💌",
    description: "You know that Rapunzel is my favorite Disney princess. Likewise, I’ve always had this “aww” for long hair, and the moment I saw your hair being soooo long, I couldn’t take my eyes off you. You were soooo cool, just like a Disney princess. But yeah, maybe in the future, if you ever think of getting a haircut, I will still adore you the same way I do now—no change in that.",
    img: "/images/hair.jpg"
  },
  {
    id: 2,
    title: "Being cutely weird",
    caption: "💌 Click to read 💌",
    description: "On the first call, when you talked about slicing a frog and explained the procedure, I actually found it so cute. I was like, “How weird is this girl? She’s kinda cool.” And then when you started talking about cockroaches, I couldn’t help but smile. Most people get grossed out, but the way you described it made it funny and adorable at the same time. Honestly, that’s when I felt you’re really different in a cool way.",
    img: "/images/weird.jpg"
  },
  {
    id: 3,
    title: "Being a Cutie",
    caption: "💌 Click to read 💌",
    description: "I find you sooo pretty from every side — like, whatever you’re doing, you’re always very attractive. From your pouty mouth pose to your cute smiles, I can literally watch your selfies or snaps for hours and hours. Even the little candid moments where you aren’t trying look perfect to me. And honestly, every picture of you feels like it could be a favorite of mine.(Note--Dont mind sweetheart i really liked that pic👻😜)",
    img: "/images/cutie.jpg"
  },
  {
    id: 4,
    title: "Being a Hottiee🔥♥",
    caption: "💌 Click to read 💌",
    description: "How can someone in traditional attire look this hottt? I just asked myself this question when I saw you posing so hot in that picture. When you sent me this picture, I was with my friends in a car, and right after watching it I blushed sooo hard that everyone in the car noticed and asked me what was wrong. I was seriously smiling in my own world. I honestly felt sooo lucky that day to have received that picture from you, like it just made my whole day extra special. So tell me, how are you sooo hot and adorably cute at the same time???",
    img: "/images/hottie.jpg"
  },
  {
    id: 5,
    title: "Being Disciplined",
    caption: "💌 Click to read 💌",
    description: "The moment you said that you are a cadet, I was like, “Seriously? How come this cutie chose to join NCC?” When you were explaining to me about the punishments during the drills and other activities, I got so worried and felt like, “Why all this?” But after hearing it from you, I realized it’s a serious passion and sheer dedication you have for the things you’re committed to, and that truly earned my respect. That was the moment I realized I had finally met someone who’s very different from other girls. So yeah, no matter what career you choose or any goal you’re willing to achieve, I’ll stand by you. I’ll make sure I support you in everything you choose, and I’ll be your top-tier cheerleader for sure.",
    img: "/images/ncc.jpg"
  },
  {
    id: 6,
    title: "Being Multi-Talented",
    caption: "💌 Click to read 💌",
    description: "Destiny or what, I don’t know, but never in my life had I imagined meeting someone who’s so talented — not just in one field but in many. I really loved your voice, like oh my God, it’s a drug, and I’m not lying, it really is.When I visited some local pools and beaches, I could barely move from one end to the other in one go… but you, girl, you know swimming. When you said that you can swim, I don’t know why but I felt so proud, and at the same time a little ashamed in a healthy way — like, “Man, she’s sooo cool, she can swim and I can’tAnd then there are those instruments… wowww. Same feeling again. I was almost about to lose hope of having you because you felt way out of my league — still do — but I had this small hope that maybe, just maybe, you’d choose me. I may not be a special guy with any special talents, but I’ll be your forever admirer for sure.",
    img: "/images/talent.jpg"
  }
];

const Page1: React.FC<Page1Props> = ({ onNext, onBack }) => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="page">
      <h1 className="title">💖You are so special to me for💖</h1>

      {!selected ? (
        <div className="card-grid">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="love-card"
              onClick={() => setSelected(card.id)}
            >
              <img src={card.img} alt={card.title} />
              <h3>{card.title}</h3>
              <p>{card.caption}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="detail-view">
          <div className="detail-text">
            <h2>{cardData[selected - 1].title}</h2>
            <p>{cardData[selected - 1].description}</p>
            <button onClick={() => setSelected(null)}>Back to cards</button>
          </div>
          <div className="detail-image">
            <img src={cardData[selected - 1].img} alt="detail" />
          </div>
        </div>
      )}

      <div className="nav-buttons">
        <button className="love-button" onClick={onBack}>
          ⬅ Back
        </button>
        <button className="love-button" onClick={onNext}>
          Next ➡
        </button>
      </div>
    </div>
  );
};

export default Page1;
