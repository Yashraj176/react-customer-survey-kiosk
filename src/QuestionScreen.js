import React from "react";
import "./QuestionScreen.css";

const QuestionScreen = ({
  questions,
  currentQuestionIndex,
  setCurrentQuestionIndex,
  handleAnswer,
  answers,
  submitSurvey,
}) => {
  const currentQuestion = questions[currentQuestionIndex];

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      submitSurvey();
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSkip = () => {
    handleAnswer(currentQuestion.id, null); // Record the answer as "skipped"
    handleNext(); // Move to the next question
  };

  return (
    <div className="question-container">
      <div className="question-content">
        <div className="question-progress">
          <p>{`Question ${currentQuestionIndex + 1} of ${questions.length}`}</p>
          <div className="progress-bar">
            <div
              className="progress"
              style={{
                width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
              }}
            ></div>
          </div>
        </div>

        <h2>{currentQuestion.text}</h2>

        {/* Rating or Text Input */}
        {currentQuestion.type === "rating" && (
          <div className="rating-options">
            {[...Array(currentQuestion.scale)].map((_, i) => (
              <button
                key={i + 1}
                className={answers[currentQuestion.id] === i + 1 ? "selected" : ""}
                onClick={() => handleAnswer(currentQuestion.id, i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}

        {currentQuestion.type === "text" && (
          <textarea
            placeholder="Your answer here"
            value={answers[currentQuestion.id] || ""}
            onChange={(e) => handleAnswer(currentQuestion.id, e.target.value)}
          />
        )}

        <div className="nav-buttons">
          <button
            onClick={handlePrev}
            disabled={currentQuestionIndex === 0}
            className="prev-button"
          >
            Previous
          </button>
          <button onClick={handleSkip} className="skip-button">
            Skip
          </button>
          <button onClick={handleNext} className="next-button">
            {currentQuestionIndex < questions.length - 1 ? "Next" : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionScreen;
