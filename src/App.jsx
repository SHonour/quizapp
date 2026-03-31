import { useState } from 'react';
import './App.css';
import Quiz from './components/quiz';
import { questions } from './data/questions';
import NextButton from './components/NextButton';
import Reset from './components/resetbtn';
import rocket from "./assets/rocket.png";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] =useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [showFeedback, setShowFeedback] =useState(false);
  

  const handleAnswer = (answer) => {
    if (showFeedback)return;
    setSelectedAnswer(answer);
    setShowFeedback(true);

    if(answer=== questions[currentQuestion].correct){
      setScore(score +1);
      
    }
  };

  const goToNext = () => {
    if (currentQuestion +1 < questions.length) {
      setCurrentQuestion(currentQuestion +1);
      setSelectedAnswer(null);
      setShowFeedback(false)
    } else{
      setIsFinished(true)

    }
  }

  const reset = ()=> {
    setIsFinished(false);
    setShowFeedback(false);
    setSelectedAnswer(null);
    setScore(0);
    setCurrentQuestion(0);

  }

  const nextDisabled = selectedAnswer === null;

 if (!isFinished) {
   return (
  
    <div className="w-7xl h-208 flex flex-col items-center">
      <Quiz 
      onAnswer={handleAnswer} 
      data={questions[currentQuestion]}
      showFeedback ={showFeedback}
      selected={selectedAnswer}
      current={currentQuestion}
      />
      <NextButton 
      goToNext={goToNext}
      showFeedback ={showFeedback}
      nextDisabled={nextDisabled}
      />
    </div>
   
      
  )
 } else {
   return(
    <div className="w-7xl h-208 flex flex-col items-center">
      <img src={rocket} alt="" />
      <h1 className='font-medium text-[39px]'>You got <strong>{score}</strong> out of {questions.length} questions correctly</h1>
      <Reset
      resetbtn={reset}/>
    </div>
   )
 }

}

export default App
