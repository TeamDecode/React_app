
import React, { useState } from 'react';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const questions = [
    {
      question: 'What is 2 + 2?',
      options: ['3', '4', '5', '6'],
      correctAnswer: '4'
    },
    {
      question: 'What is the capital of France?',
      options: ['London', 'Paris', 'Berlin', 'Madrid'],
      correctAnswer: 'Paris'
    },
    {
      question: 'What is the symbol for water?',
      options: ['H2O', 'CO2', 'O2', 'NaCl'],
      correctAnswer: 'H2O'
    }
  ];

  const handleAnswer = (selectedAnswer) => {
    setAnswers([...answers, selectedAnswer]);
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div>
      {currentQuestion < questions.length ? (
        <div>
          <h2>{questions[currentQuestion].question}</h2>
          <ul>
            {questions[currentQuestion].options.map((option, index) => (
              <li key={index} onClick={() => handleAnswer(option)}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <h2>Quiz Complete!</h2>
          <h3>Your Answers:</h3>
          <ul>
            {questions.map((question, index) => (
              <li key={index}>
                <strong>{question.question}</strong>: {answers[index]}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Quiz;



