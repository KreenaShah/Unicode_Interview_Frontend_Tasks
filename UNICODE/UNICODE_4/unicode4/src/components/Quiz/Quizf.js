import React, { useState } from 'react'

var QuestionBank = [
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

  console.log(QuestionBank);

function Quizf() {

  const[currentQuestion,setCurrentQuestion]=useState(0);
  const[score,setScore]=useState(0);
  const[showScore , setShowScore]=useState(false);

  const handleAnswerResponse = (isCorrect)=>
  {
    if(isCorrect)
    {
      setScore(score+1);
    }

    const nextQuestion = currentQuestion + 1 ;
    if(nextQuestion < QuestionBank.length)
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


  return (
    <div>
      Hey , quizf!
    </div>
  )
}

export default Quizf
