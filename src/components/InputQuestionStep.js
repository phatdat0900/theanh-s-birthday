import { useState } from "react";

export default function InputQuestionStep({ stepData, onSelect }) {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSelect(inputValue);
        setInputValue("");
    };

    return (
        <div className="question-step">
         <h2 className="quiz_title slide-up">Câu 6</h2>
            <h2 className=" quiz_quest slide-up delay-1">{stepData.question}</h2>
            <img src={process.env.PUBLIC_URL + stepData.img} alt="pic" className="img_quiz slide-up delay-1" />
            <p className="slide-up delay-2">Nhập tên người bạn muốn đánh đổi</p>
            <form onSubmit={handleSubmit} className="input-form slide-up delay-2">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="input-dotted"
                  
                />

            </form>
             <button type="submit" onClick={onSelect} className="button black slide-up delay-2">
                    Kêt quả →
                </button>
        </div>
    );
}