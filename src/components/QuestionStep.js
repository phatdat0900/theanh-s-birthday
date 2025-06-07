export default function QuestionStep({ stepData, onSelect }) {
    return (
      <div className="question-step">
      <h2 className="quiz_title slide-up">Câu {stepData.num}</h2>
        <h2 className="quiz_quest slide-up  slide-up delay-1">{stepData.question}</h2>
        <img src={process.env.PUBLIC_URL + stepData.img} alt="pic" className="img_quiz slide-up delay-1" />
        <div className="options">
          {stepData.options.map((opt) => (
            <button key={opt} onClick={() => onSelect(opt)} className="button black slide-up delay-2">
              {opt}
            </button>
          ))}
        </div>
      </div>
    );
  }
  