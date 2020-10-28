import React from 'react';
import quizz from './Apprentice_TandemFor400_Data.json';

const Question = () => {
  return (
    <div className={"question"}>
      
        <h2 >{quizz[0].question}</h2>
        <div className={"answer"}>
          <input type="checkbox" name="check"/>
          <p>{quizz[0].incorrect[0]}</p>
        </div>
        <div className={"answer"}>
          <input type="checkbox" name="check"/>
          <p>{quizz[0].incorrect[1]}</p>
        </div>
        <div className={"answer"}>
          <input type="checkbox" name="check"/> 
          <p>{quizz[0].incorrect[2]}</p>
        </div>
        <div className={"answer"}>
          <input type="checkbox" name="check"/>
          <p>{quizz[0].correct}</p>
        </div>
    </div>
  )
}
export default Question;