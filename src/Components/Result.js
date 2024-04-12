const Result = ({ currentAnswer, questions , onReset}) => {
  const correctAnswers = currentAnswer.filter(ans => ans === true).length
  
  return (
    <div>
      <h1 className="text-lg font-semibold pt-4">Result</h1>
      <p>You have answered {correctAnswers} out of {questions.length}</p>
     {questions.map((question, index) => {
        return (
            <div key={index}>
                <p key={index} className={currentAnswer[index] ? "text-green-600" : "text-red-500"}>{question.question}</p>
                {/* <span> {!currentAnswer[index] && question.answerOptions.find(ans => ans.isCorrect).text}</span> */}
                <span>{!currentAnswer[index] && question.answerOptions.filter(ans => ans.isCorrect)[0].text}</span>
            </div>
        )
     })}
     <button className="border-2 px-2 w-16 rounded-md bg-gray-500" onClick={onReset}>Reset</button>
    </div>
  );
};

export default Result;
