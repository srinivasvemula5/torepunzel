import React, { useState, useEffect, useRef } from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import "./Love.css";

function Land() {
  const [page, setPage] = useState(0); // 0 = landing page
  const [messages, setMessages] = useState<string[]>([]);
  const [accepted, setAccepted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Play audio when landing page loads
    if (page === 0 && audioRef.current) {
      audioRef.current.play().catch(() => {
        console.log("Autoplay prevented. Click 'Lets Start' to play audio.");
      });
    }
  }, [page]);

  return (
    <div className={`love-wrapper ${page === 0 ? "page-0" : ""}`}>
      <audio ref={audioRef} src="/audio/song.mp3" loop />
      
      {/* Floating hearts */}
      <div className="hearts">
        {[
          "💖","💕","💓","💗","💞","❤️","💘","💝","💜","💙",
          "💝","💖","💕","💓","💗","💞","❤️","💘","💝","💜"
        ].map((heart, i) => (
          <span key={i} className="heart">{heart}</span>
        ))}
      </div>

      {/* Landing page */}
      {page === 0 && (
        <div className="page land-page">
          <p className="audio-note">🎵 Make sure your desktop audio is on! or use headphones 🎵</p>
          <h1 className="title">💖 Welcome Repunzel! 💖</h1>
          <button className="love-button" onClick={() => { setPage(1); audioRef.current?.play(); }}>
            Lets Start 💌
          </button>
        </div>
      )}

      {/* Other pages */}
      {page === 1 && <Page1 onNext={() => setPage(2)} onBack={() => setPage(0)} />}
      {page === 2 && (
        <Page2
          messages={messages}
          setMessages={setMessages}
          onNext={() => setPage(3)}
          onBack={() => setPage(1)}
        />
      )}
      {page === 3 && (
        <Page3
          accepted={accepted}
          setAccepted={setAccepted}
          onNext={() => accepted && setPage(4)}
          onBack={() => setPage(2)}
        />
      )}
      {page === 4 && <Page4 onBack={() => setPage(3)} />}
    </div>
  );
}

export default Land;
