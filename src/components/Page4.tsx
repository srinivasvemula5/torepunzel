type Props = {
  onBack: () => void;
};

function Page4({ onBack }: Props) {
  return (
    <div className="page page4">
      <h1 className="final-message">
        💖 I KNOW I’M THE ONE WHO'S GONNA SAY THIS, SO YEAH REPUNZEL I FELL IN LOVE WITH YOU.  
        I REALLY, REALLY, REALLY LOVE YOU FROM THE BOTTOM OF MY HEART AND I WILL BE LOVING YOU FOR THE REST OF MY LIFE 🫂🫂🫂🫂🫂🫂🫂🫂🫂🫂🫂🫂🫂🫂💖
      </h1>
      <button className="love-button" onClick={onBack}>
        ⬅ Back
      </button>
    </div>
  );
}

export default Page4;
