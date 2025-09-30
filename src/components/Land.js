import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import "./Love.css";
function Land() {
    const [page, setPage] = useState(0); // 0 = landing page
    const [messages, setMessages] = useState([]);
    const [accepted, setAccepted] = useState(false);
    const audioRef = useRef(null);
    useEffect(() => {
        // Play audio when landing page loads
        if (page === 0 && audioRef.current) {
            audioRef.current.play().catch(() => {
                console.log("Autoplay prevented. Click 'Lets Start' to play audio.");
            });
        }
    }, [page]);
    return (_jsxs("div", { className: `love-wrapper ${page === 0 ? "page-0" : ""}`, children: [_jsx("audio", { ref: audioRef, src: "/audio/song.mp3", loop: true }), _jsx("div", { className: "hearts", children: [
                    "💖", "💕", "💓", "💗", "💞", "❤️", "💘", "💝", "💜", "💙",
                    "💝", "💖", "💕", "💓", "💗", "💞", "❤️", "💘", "💝", "💜"
                ].map((heart, i) => (_jsx("span", { className: "heart", children: heart }, i))) }), page === 0 && (_jsxs("div", { className: "page land-page", children: [_jsx("p", { className: "audio-note", children: "\uD83C\uDFB5 Make sure your desktop audio is on! or use headphones \uD83C\uDFB5" }), _jsx("h1", { className: "title", children: "\uD83D\uDC96 Welcome Repunzel! \uD83D\uDC96" }), _jsx("button", { className: "love-button", onClick: () => {
                            setPage(1);
                            audioRef.current?.play();
                        }, children: "Lets Start \uD83D\uDC8C" })] })), page === 1 && _jsx(Page1, { onNext: () => setPage(2), onBack: () => setPage(0) }), page === 2 && (_jsx(Page2, { messages: messages, setMessages: setMessages, onNext: () => setPage(3), onBack: () => setPage(1) })), page === 3 && (_jsx(Page3, { accepted: accepted, setAccepted: setAccepted, onNext: () => accepted && setPage(4), onBack: () => setPage(2) })), page === 4 && _jsx(Page4, { onBack: () => setPage(3) })] }));
}
export default Land;
