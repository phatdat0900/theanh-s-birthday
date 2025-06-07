import { useState } from "react";
import stepsData from "./data/stepsData";
import StepLayout from "./components/StepLayout";
import QuestionStep from "./components/QuestionStep";
import InputQuestionStep from "./components/InputQuestionStep";
import ContentStep from "./components/ContentStep";
import MessageStep from "./components/MessageStep";
import SummaryStep from "./components/SummaryStep";
import VideoStep from "./components/VideoStep";
import "./App.css";

function App() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);

  const current = stepsData[step];

  const handleSelect = (option) => {
    setAnswers([...answers, option]);
    setStep(step + 1);
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  return (
    <StepLayout step={step}>
     {step === 0 && (
      <div className="content_intro">
      <div className="intro_container slide-up " style={{ position:"relative" }}>
         <img src="/images/TRANG1-01.webp" alt="pic" className="img_intro"/>

      <h2>Welcome The anh to the buom Test!</h2>
      <p>Để bắt đầu <br></br>hãy trả lời những câu hỏi sau ...</p>
      </div>
           
      <button onClick={handleSelect} className="button slide-up delay-1">Nhấn để gặpThomas</button>
      </div>
  
  )}
   {step === 7 && (
     <div className="content_intro">
      <h2 className="title slide-up ">Công bố kết quả bài test</h2>
      <p  className="shadow_pink slide-up delay-1">1 TỈ BÍM </p>
      <div className="block_message slide-up delay-1">là số điểm bạn nhận được</div>
      <button onClick={handleSelect} className="button slide-up delay-2">Nhấn để nhận chứng nhận</button>
      </div>
  
  )}
   {step === 8 && (
     <div className="content_intro">
      <h2 className="title slide-up">Congrats <br></br> bạn đã được chứng nhận là Bi'm MEMBER</h2>
      <div className="step_8_message slide-up delay-3"> 
       <div className="message">dưới đây là phần thưởng dành cho bạn </div>
      <img src="/images/TRANG9-02.webp" alt="pic" className="img_quiz"/>
      
     
      </div>
      <button onClick={handleSelect} className="button slide-up delay-1">Nhấn để xem bím</button>
      </div>
  
  )}
    {step === 9 && (
      <VideoStep onSelect={handleSelect}></VideoStep>
  )}
   {step === 10 && (
      <div className="content_intro">
      <h2 className="title slide-up">TADAAAA</h2>
      <h3 className="subtitle slide-up">Đây là quà sinh nhật bọn tao rành cho mày</h3>
      <div style={{ position:"relative" }} className="slide-up delay-1">
          <img src="/images/TRANG11-01.webp" alt="pic" className="img_quiz"/>
          <button onClick={handleSelect} className="button black black_2 ">Nhấn để thổi nến bánh</button>
      </div>
      </div>
  )}
     {step === 11 && (
      <MessageStep onSelect={handleSelect}></MessageStep>
  
  )}
    {current.type === "question" ? (
      <QuestionStep stepData={current} onSelect={handleSelect} />
    ) :current.type === "input" ? (
      <InputQuestionStep stepData={current} onSelect={handleSelect} />
    )
      : current.type === "summary" ? (
      <SummaryStep onNext={handleNext} />
    ) : (
      <ContentStep content={current.content} onNext={handleNext} />
    )}
  </StepLayout>
  );
}

export default App;
