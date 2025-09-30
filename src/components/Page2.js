import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
function Page2({ messages: _messages, setMessages: _setMessages, onNext, onBack }) {
    // Prefix messages and setMessages with _ to prevent TS6133 if currently unused
    const cuteMessages = [
        {
            title: "Holding your hand Forever💓",
            description: "No matter what the situation is under any circumstances I don't wanna lose you at any cost. So yeah this is my first commitment that I am not gonna leave your hand, only if you are willing to offer me your hand👀...."
        },
        {
            title: "Staying Focused about my career✨",
            description: "In order to have you forever I have to grow in my ways so that on one fine day I'll be eligible at least to come over your home and convince your parents to let them hand over their headache to me so that I can take care of her from nowww👀"
        },
        {
            title: "Hitting the Gym Regularly😤",
            description: "My girl being an NCC cadet and being soo fit I have to make sure I at least keep up with you and I got the best girl and I feel she too deserves a lot so yeah no matter what I can't match you but I'll try hard to become better.."
        },
        {
            title: "Standing by you no matter what💖",
            description: "“So no matter what path you take or what dream you chase, I’ll be right there by your side—supporting you every step of the way. Your happiness and success mean the world to me, and I’ll always cheer for you, through every challenge and every moment of doubt. I believe in you completely, and I feel so lucky to have someone as amazing as you in my life. Together, we can face anything, and I’ll always be your biggest supporter.”"
        }
    ];
    const [activeIndex, setActiveIndex] = useState(null);
    const toggleDescription = (index) => {
        setActiveIndex(prev => (prev === index ? null : index));
    };
    return (_jsxs("div", { className: "page page2", children: [_jsx("h2", { className: "subtitle", children: "My Commitments for you\uD83C\uDF38" }), _jsx("div", { className: "statement-list", children: cuteMessages.map((msg, idx) => (_jsxs("div", { className: "statement-wrapper", children: [_jsx("button", { className: "statement-btn", onClick: () => toggleDescription(idx), children: msg.title }), activeIndex === idx && _jsx("p", { className: "statement-desc", children: msg.description })] }, idx))) }), _jsxs("div", { style: { display: "flex", gap: "20px", marginTop: "20px" }, children: [_jsx("button", { className: "love-button", onClick: onBack, children: "\u2B05 Back" }), _jsx("button", { className: "love-button", onClick: onNext, children: "Next \u27A1\uFE0F" })] })] }));
}
export default Page2;
