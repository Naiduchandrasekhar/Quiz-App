import questions from "./Constants/questions.json";

import QuestionComp from "./Components/QuestionComp";
import { useState } from "react";
import Result from "./Components/Result";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState([]);

  const handleOptionClick = (value) => {
    setCurrentQuestion((prev) => prev + 1);
    setCurrentAnswer([...currentAnswer, value]);
  };

  const handleReset = () => {
    setCurrentQuestion(0)
    setCurrentAnswer([])
  }

  return (
    <div className="flex justify-center items-center">
      <div className="pt-[40px] text-center">
        <h1 className="text-3xl font-bold">World Quiz</h1>
        {currentQuestion < questions.length && (
          <div className="border-2 border-gray-500 p-4 mt-4">
            <QuestionComp
              onAnswerClick={handleOptionClick}
              question={questions[currentQuestion]}
            />
          </div>
        )}
        <div>{questions.length === currentQuestion && <Result onReset={handleReset} questions={questions} currentAnswer={currentAnswer}/>}</div>
      </div>
    </div>
  );
}

export default App;
