import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const page3Data = [
    {
        id: 1,
        title: "Have your favourite food 💖",
        description: "Together we can have your favorite food, savor every bite, and enjoy it like it’s the best thing in the world. Even if you’re mad at me, we can go out and have your favorite food to make up, and just like that, turn any bad moment into a happy one. I want to share all those little food moments with you, laugh while eating, and make every meal a memory that’s just ours.",
        img: "/images/love1.jpg",
    },
    {
        id: 2,
        title: "Watch your favourite shows 🌟",
        description: "Together we can watch your favorite shows, just sit back and relax, laugh at the funny parts, and get really into the story. I love the idea of sharing those little moments with you, talking about the episodes, reacting to the scenes, and just enjoying it all together. Honestly, watching with you makes everything so much more fun and special.",
        img: "/images/love2.jpg",
    },
    {
        id: 3,
        title: "Have long nap sessions cuddling each other 👀",
        description: "Together we can have nap sessions with cuddles, just lying there and being cozy. I love the idea of resting with you in my arms, feeling completely relaxed and safe, and waking up just a little happier because we’re together. Those simple, quiet moments with you would honestly be my favorite part of the day.",
        img: "/images/love3.jpg",
    },
    {
        id: 4,
        title: "Co-parent our pets ✨",
        description: "Together we can have a pet and take care of it side by side, sharing all the little moments and responsibilities. I can picture us laughing at the silly things it does, spoiling it just a little too much, and making so many memories together. Having a little furry friend with us would make life feel even warmer and more fun.",
        img: "/images/love4.jpg",
    },
    {
        id: 5,
        title: "Go for late night long drives 🌉♥",
        description: "Together we can go on late-night rides, just the two of us with the road ahead and the stars above. I can imagine us laughing, talking about anything and everything, or just enjoying the quiet moments together. Those little adventures, with music in the background and you by my side, would honestly be some of my favorite memories.",
        img: "/images/love5.jpg",
    },
    {
        id: 6,
        title: "Support each other in every possible way 🌉",
        description: "Together we can support each other, through every little challenge and every big moment. I want us to be there for one another, to lift each other up, celebrate the wins, and hold each other through the tough times. Knowing we’ve got each other’s backs would make everything feel lighter and more meaningful.",
        img: "/images/love6.jpg",
    },
];
function Page3({ accepted, setAccepted, onNext, onBack }) {
    const [selected, setSelected] = useState(null);
    const handleSelect = (id) => {
        setSelected(prev => (prev === id ? null : id));
        if (!accepted)
            setAccepted(true); // auto-accept on click
    };
    return (_jsxs("div", { className: "page page3", children: [_jsx("h2", { className: "subtitle", children: "What we can do together \uD83D\uDC96" }), !selected ? (_jsx("div", { className: "card-grid", children: page3Data.map(card => (_jsxs("div", { className: "love-card", onClick: () => handleSelect(card.id), children: [_jsx("img", { src: card.img, alt: card.title }), _jsx("h3", { children: card.title }), _jsx("p", { children: "\uD83D\uDC8C Click to read \uD83D\uDC8C" })] }, card.id))) })) : (_jsxs("div", { className: "detail-view", children: [_jsxs("div", { className: "detail-text", children: [_jsx("h2", { children: page3Data[selected - 1].title }), _jsx("p", { children: page3Data[selected - 1].description }), _jsx("button", { onClick: () => setSelected(null), className: "love-button", children: "Back to cards" })] }), _jsx("div", { className: "detail-image", children: _jsx("img", { src: page3Data[selected - 1].img, alt: page3Data[selected - 1].title }) })] })), _jsxs("div", { className: "nav-buttons", style: { marginTop: "20px" }, children: [_jsx("button", { className: "love-button", onClick: onBack, children: "\u2B05 Back" }), _jsx("button", { className: "love-button", onClick: onNext, disabled: !accepted, children: "Finally \u27A1\uFE0F" })] })] }));
}
export default Page3;
