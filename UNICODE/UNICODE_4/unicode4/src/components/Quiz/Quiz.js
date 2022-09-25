import React, { useState } from 'react'
import './Quiz.css'

const Quiz = ({ setPageNo, pageNo, name, sapId, selectedAnswers, setSelectedAnswers }) => {

  var questionBank = [
    {
      Question : "Look at this series: 2, 1, (1/2), (1/4), ... What number should come next? ",
      AnswerOptions : [
        {Answer:"(1/3)", isCorrect : false},
        {Answer:"(1/8)", isCorrect : true},
        {Answer:"(2/8)", isCorrect : false},
        {Answer:"(1/16)", isCorrect : false}
      ]
    },
    {
      Question : "ELFA GLHA ILJA ? MLNA ",
      AnswerOptions : [
        {Answer:"OLPA", isCorrect : false},
        {Answer:"KLMA", isCorrect : false},
        {Answer:"KLLA", isCorrect : true},
        {Answer:"LLMA", isCorrect : false}
      ]
    },
    {
      Question : "What is the capital of india ? ",
      AnswerOptions : [
        {Answer:"Rajasthan", isCorrect : false},
        {Answer:"Delhi", isCorrect : true},
        {Answer:"Mumbai", isCorrect : false},
        {Answer:"Gujrat", isCorrect : false}
      ]
    },
    {
      Question : "Look at this series: 53, 53, 40, 40, 27, 27, ... What number should come next? ",
      AnswerOptions : [
        {Answer:"53", isCorrect : false},
        {Answer:"11", isCorrect : false},
        {Answer:"86", isCorrect : false},
        {Answer:"14", isCorrect :  true}
      ]
    },
    {
      Question : "Here are some words translated from an artificial language. Gorblflur means fan belt , pixngorbl means ceiling fan , arthtusl means tile roof ... Which word could mean ceiling tile? ",
      AnswerOptions : [
        {Answer:"gorbltusl", isCorrect : false},
        {Answer:"flurgorbl", isCorrect : false},
        {Answer:"pixnarth", isCorrect : true},
        {Answer:"arthflur", isCorrect : false}
      ]
    }
  ]
  // console.log(questionBank);

  //useState Hook
  const[currentQuestion,setCurrentQuestion]=useState(0);
  const[score,setScore]=useState(0);
  const[showScore , setShowScore]=useState(false);

  const handleAnswerResponse = (answer)=>
  {
    if(answer.isCorrect)
    {
      setScore(score+1);
    }
    setSelectedAnswers([...selectedAnswers, answer]);
    console.log(selectedAnswers)
    const nextQuestion = currentQuestion + 1 ;
    if(nextQuestion < questionBank.length)
    {
      setCurrentQuestion(nextQuestion);
    }
    else{
      setShowScore(true);
    }
  }

  const resetQuiz=()=>
  { 
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  }

  // const handleSelect=(ans)=>
  // {
  //   if(ans.isCorrect)
  //   <div className='select'>Correct Answer</div>
  // }

  return (
    <div>
      {showScore ? (
        <div>
          <p className="QuizR">{name} [{sapId}] have scored {score} out of {questionBank.length}</p>
          <div className="QuizRTable">
              {questionBank.map((q, index) => (
                <div className="QuizRQ" key={index}>
                  {q.Question}
                  {q.AnswerOptions.map((ans, ind) => (
                    // <div className="QuizRA" key={ind}>
                    //   {ans.Answer} {ans.isCorrect && "Correct"} {ans.Answer == selectedAnswers[index].Answer && "Selected answer"}
                    // </div>
                    <div className="QuizRA" key={ind}>
                    {ans.Answer} 
                    {ans.isCorrect && <pre className='select'>Correct Answer</pre>} 
                    {(ans.Answer == selectedAnswers[index].Answer && ans.isCorrect ) && <pre className='select'>Selected Answer : Correct</pre>} 
                    {(ans.Answer == selectedAnswers[index].Answer && !ans.isCorrect ) && <pre className='wrong'>Selected Answer : Incorrect</pre>}
                    </div>
                  ))}
                </div>
            ))}
          </div>

          <div><button className="QuizRB" type='submit' onClick={resetQuiz}>Reset</button></div>
        </div>

      ):(
        <div className="quiz_table">
          <div>
            <div className="quiz_QN">
              <span className="quiz_QN" >{currentQuestion + 1}</span>/{questionBank.length}
              <span className="quiz_Q">&nbsp;&nbsp;{questionBank[currentQuestion].Question}</span>
            </div>
          </div>

          <div >
            {questionBank[currentQuestion].AnswerOptions.map((answer, index) =>(
              <button className="quiz_AO" onClick={() => handleAnswerResponse(answer)} key={index}>{answer.Answer}</button>
            ))}
          </div>
        </div>
        
      )
      }
    </div>
  )
}

export default Quiz;