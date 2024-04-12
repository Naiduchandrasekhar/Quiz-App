const QuestionComp = ({ question, onAnswerClick }) => {
  return (
    <div>
      <h1 className="text-xl text-black font-semibold">{question.question}</h1>
      <div className="grid grid-cols-2 mt-5">
        {question.answerOptions.map((option) => {
          return (
            <button onClick={() => onAnswerClick(option.isCorrect)} key={option.text} className="p-2 border-2 m-2 hover:bg-black hover:text-white">
              {option.text}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionComp;
