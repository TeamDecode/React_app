import React, { useState, useEffect } from 'react'; // Use useEffect from React
// import { getQuestions, submitAnswer } from '../utils/firebaseUtils';

const Quiz = () => {
	const [questions, setQuestions] = useState([]);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [selectedAnswer, setSelectedAnswer] = useState('');

	// Fetch questions from Firebase on component mount
	useEffect(() => { // Directly use useEffect instead of React.useEffect
		const fetchQuestions = async () => {
			const questions = await getQuestions();
			setQuestions(questions);
		};

		fetchQuestions();
	}, []);

	const handleAnswerSelection = (answer) => {
		setSelectedAnswer(answer);
	};

	const handleNextQuestion = async () => {
		const questionId = questions[currentQuestionIndex].id;
		await submitAnswer('userId', questionId, selectedAnswer);
		setSelectedAnswer('');
		if (currentQuestionIndex < questions.length - 1) {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
		} else {
			alert('End of the Quiz!');
		}
	};

	// Correct placement of the rendering logic within the component function
	if (!questions.length) {
		return <div>Loading questions...</div>;
	}

	const currentQuestion = questions[currentQuestionIndex];

	return (
		<div className="container mx-auto p-4">
			<div className="mb-4">
				<div className="text-2xl font-bold">{currentQuestion.question}</div>
				<div className="mt-2">
					{currentQuestion.options.map((option, index) => (
						<label key={index} className="block">
							<input
								type="radio"
								name="answer"
								value={option}
								checked={selectedAnswer === option}
								onChange={() => handleAnswerSelection(option)}
								className="mr-2"
							/>
							{option}
						</label>
					))}
				</div>
			</div>
			<button
				onClick={handleNextQuestion}
				className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
			>
				Next
			</button>
		</div>
	);
};

export default Quiz;
