import { useState } from 'react';
import './App.css';
// import { BrowserRouter, Routes, Route, Browser } from "react-router-dom";
import Header from './components/Header/Header'
import Quiz from './components/Quiz/Quiz'

function App() {
  const [name , setName] = useState("");
  const [sapId , setSapId] = useState("");
  const [pageNo, setPageNo] = useState(0);
  const [selectedAnswers , setSelectedAnswers] = useState([]);

  return (
    <div className="App">
      {pageNo == 0 ? <Header name={name} setName={setName} setPageNo={setPageNo} setSapId={setSapId} sapId={sapId} /> : <Quiz setPageNo={setPageNo} pageNo={pageNo} name={name} sapId={sapId} selectedAnswers={selectedAnswers} setSelectedAnswers={setSelectedAnswers} />}
    </div>
  );
}

export default App;
