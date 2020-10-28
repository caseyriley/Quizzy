import React from 'react';
import quizz from './Apprentice_TandemFor400_Data.json';
import Question from './Question';


function App() {



    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
    shuffle(quizz)

    const [pointsState, setPointsState] = useState(0);


    function submit(correctAnswer, chosenAnswer){
      if (correctAnswer === chosenAnswer){
        setPointsState(pointsState + 1)
      }
    }
    
   
 

  return (
    <div id={"main"}>
      <h1 id={'main__title'}>QUIZZY</h1>
      <Question question={quizz[0].question} answers={[quizz[0].incorrect[0], quizz[0].incorrect[1], quizz[0].incorrect[2], quizz[0].correct]} correct={quizz[0].correct}/>
      <Question question={quizz[1].question} answers={[quizz[1].incorrect[0], quizz[1].incorrect[1], quizz[1].incorrect[2], quizz[1].correct]} correct={quizz[1].correct}/>
      <Question question={quizz[2].question} answers={[quizz[2].incorrect[0], quizz[2].incorrect[1], quizz[2].incorrect[2], quizz[2].correct]} correct={quizz[2].correct}/>
      <Question question={quizz[3].question} answers={[quizz[3].incorrect[0], quizz[3].incorrect[1], quizz[3].incorrect[2], quizz[3].correct]} correct={quizz[3].correct}/>
      <Question question={quizz[4].question} answers={[quizz[4].incorrect[0], quizz[4].incorrect[1], quizz[4].incorrect[2], quizz[4].correct]} correct={quizz[4].correct}/>
      <Question question={quizz[5].question} answers={[quizz[5].incorrect[0], quizz[5].incorrect[1], quizz[5].incorrect[2], quizz[5].correct]} correct={quizz[5].correct}/>
      <Question question={quizz[6].question} answers={[quizz[6].incorrect[0], quizz[6].incorrect[1], quizz[6].incorrect[2], quizz[6].correct]} correct={quizz[6].correct}/>
      <Question question={quizz[7].question} answers={[quizz[7].incorrect[0], quizz[7].incorrect[1], quizz[7].incorrect[2], quizz[7].correct]} correct={quizz[7].correct}/>
      <Question question={quizz[8].question} answers={[quizz[8].incorrect[0], quizz[8].incorrect[1], quizz[8].incorrect[2], quizz[8].correct]} correct={quizz[8].correct}/>
      <Question question={quizz[9].question} answers={[quizz[9].incorrect[0], quizz[9].incorrect[1], quizz[9].incorrect[2], quizz[9].correct]} correct={quizz[9].correct}/>
      <div id={"submit"}> 
        <h3>SUBMIT</h3>
      </div>
    </div>

  );
}

export default App;
