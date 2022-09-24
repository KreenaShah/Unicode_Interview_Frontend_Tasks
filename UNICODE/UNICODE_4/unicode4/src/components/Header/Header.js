import './Header.css'
import React, { useState } from 'react'
import quiz from './quiz5.jpg'; 
// import ErrorMessage from '../ErrorMessage/ErrorMessage';

const Header = ({name , setName, setPageNo, setSapId, sapId }) => {
  const[error,setError] = useState("false");
  // const history = useHistory();
  const handleSubmit = () => {
    if (!sapId || !name){
      setError(true);
      return;
    }
    else {
      setError(false)
      setPageNo(1);
    }
  }
  return (
    <div className='container'>

      <div className='header__mainContainer'>
        <img src={quiz} alt='quiz img' className='quizImg'/>
      </div>

      <div className='header__mainText--container'>
        <h2> &nbsp;&nbsp;Be ready. Be smart. Be noticed!</h2>
        <p  className='header__text1'> &nbsp;&nbsp;&nbsp;We came, we quizzed, we conquered : Make Learning Awesome</p>
        <p className='header__text2'>&nbsp;&nbsp;&nbsp;Let's get started !</p>
        <p>&nbsp;&nbsp;&nbsp;Not &nbsp;<b>kreenashah61260@gmail.com</b>? &nbsp;<span>Switch Account</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Draft Saved</p>
      </div>

      <div className='userDetails'>
        {/* {error && <ErrorMessage>Please fill all the fields</ErrorMessage>} */}
        <form>
          <p className='namep'>&nbsp;&nbsp;&nbsp;Name : *&nbsp;&nbsp;&nbsp;<input type='text' className='name' placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)} required/></p>
          <p className='sapp'>&nbsp;&nbsp;&nbsp;SAPID : *&nbsp;&nbsp;&nbsp;<input type='text' className='sap' placeholder='Enter Your SAPID' onChange={(e) => setSapId(e.target.value)} required/></p>
        </form>
      </div>

      <div className='startButton--container'>
        <button className='startButton' onClick={() => handleSubmit()}>Start</button>
      </div>
    </div>
  )
}

export default Header
