import React, {useState} from 'react';
import quizz from './Apprentice_TandemFor400_Data.json';
import Question from './Question';


function App() {



  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
  
      // swap elements array[i] and array[j]
      // we use "destructuring assignment" syntax to achieve that
      // you'll find more details about that syntax in later chapters
      // same can be written as:
      // let t = array[i]; array[i] = array[j]; array[j] = t
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  const [questionArrayState, setQuestionArrayState] = useState(shuffle(quizz))
  console.log(questionArrayState)

  return (
    <div id={"main"}>
      <h1 id={'main__title'}>QUIZZY</h1>
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
      <div className={"question"}>
        <h2 >{quizz[1].question}</h2>
        <div className={"answer"}>
          <input type="checkbox" name="check"/>
          <p>{quizz[1].incorrect[0]}</p>
        </div>
        <div className={"answer"}>
          <input type="checkbox" name="check"/>
          <p>{quizz[1].incorrect[1]}</p>
        </div>
        <div className={"answer"}>
          <input type="checkbox" name="check"/> 
          <p>{quizz[1].incorrect[2]}</p>
        </div>
        <div className={"answer"}>
          <input type="checkbox" name="check"/>
          <p>{quizz[1].correct}</p>
        </div>
      </div>
    </div>

  );
}

export default App;
