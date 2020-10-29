import React, {useState} from 'react';
import quizz from './Apprentice_TandemFor400_Data.json';
import Question from './Question';

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]];
  }
}
shuffle(quizz)

let answersArray0 =  [quizz[0].incorrect[0], quizz[0].incorrect[1], quizz[0].incorrect[2], quizz[0].correct];
shuffle(answersArray0)
let answersArray1 =  [quizz[1].incorrect[0], quizz[1].incorrect[1], quizz[1].incorrect[2], quizz[1].correct];
shuffle(answersArray1)
let answersArray2 =  [quizz[2].incorrect[0], quizz[2].incorrect[1], quizz[2].incorrect[2], quizz[2].correct];
shuffle(answersArray2)
let answersArray3 =  [quizz[3].incorrect[0], quizz[3].incorrect[1], quizz[3].incorrect[2], quizz[3].correct];
shuffle(answersArray3)
let answersArray4 =  [quizz[4].incorrect[0], quizz[4].incorrect[1], quizz[4].incorrect[2], quizz[4].correct];
shuffle(answersArray4)
let answersArray5 =  [quizz[5].incorrect[0], quizz[5].incorrect[1], quizz[5].incorrect[2], quizz[5].correct];
shuffle(answersArray5)
let answersArray6 =  [quizz[6].incorrect[0], quizz[6].incorrect[1], quizz[6].incorrect[2], quizz[6].correct];
shuffle(answersArray6)
let answersArray7 =  [quizz[7].incorrect[0], quizz[7].incorrect[1], quizz[7].incorrect[2], quizz[7].correct];
shuffle(answersArray7)
let answersArray8 =  [quizz[8].incorrect[0], quizz[8].incorrect[1], quizz[8].incorrect[2], quizz[8].correct];
shuffle(answersArray8)
let answersArray9 =  [quizz[9].incorrect[0], quizz[9].incorrect[1], quizz[9].incorrect[2], quizz[9].correct];
shuffle(answersArray9)

function App() {



    

    const [pointsState, setPointsState] = useState({"q0":0, "q1":0, "q2":0, "q3":0, "q4":0, "q5":0, "q6":0, "q7":0, "q8":0, "q9":0});
    const [totallState, setTotallState] = useState(0);
    const [scoreModalState, setScoreModalState] = useState(false)


  function submit(){
    let count = 0;
    for (const answer in pointsState){
      count = count + pointsState[answer];
      console.log(pointsState[answer]);
    }
    setTotallState(count);
    setScoreModalState(true);
    console.log("totallState====>",totallState)
  }
    
  function closeScoreModal(){
    setScoreModalState(false);
  }
   
 

  return (
    <>
      
        <div id={"main"}>
          <h1 id={'main__title'}>QUIZZY</h1>
          <Question question={quizz[0].question} answers={answersArray0} correct={quizz[0].correct} pointsState={pointsState} setPointsState={setPointsState} qId={0}/>
          <Question question={quizz[1].question} answers={answersArray1} correct={quizz[1].correct} pointsState={pointsState} setPointsState={setPointsState} qId={1}/>
          <Question question={quizz[2].question} answers={answersArray2} correct={quizz[2].correct} pointsState={pointsState} setPointsState={setPointsState} qId={2}/>
          <Question question={quizz[3].question} answers={answersArray3} correct={quizz[3].correct} pointsState={pointsState} setPointsState={setPointsState} qId={3}/>
          <Question question={quizz[4].question} answers={answersArray4} correct={quizz[4].correct} pointsState={pointsState} setPointsState={setPointsState} qId={4}/>
          <Question question={quizz[5].question} answers={answersArray5} correct={quizz[5].correct} pointsState={pointsState} setPointsState={setPointsState} qId={5}/>
          <Question question={quizz[6].question} answers={answersArray6} correct={quizz[6].correct} pointsState={pointsState} setPointsState={setPointsState} qId={6}/>
          <Question question={quizz[7].question} answers={answersArray7} correct={quizz[7].correct} pointsState={pointsState} setPointsState={setPointsState} qId={7}/>
          <Question question={quizz[8].question} answers={answersArray8} correct={quizz[8].correct} pointsState={pointsState} setPointsState={setPointsState} qId={8}/>
          <Question question={quizz[9].question} answers={answersArray9} correct={quizz[9].correct} pointsState={pointsState} setPointsState={setPointsState} qId={9}/>
          <div id={"submit"}> 
            <h3 onClick={submit}>SUBMIT</h3>
          </div>
        </div>
      <div className={`${scoreModalState === true ? "score-modal-open" : "score-modal-close"}`} onClick={closeScoreModal}>
        <div id={"score-modal-open__point-c"}>
          <h1 id={"score-modal-open__point-c__title"}>YOUR SCORE</h1>
          <h1 id={"score-modal-open__point-c__points"}>{totallState}</h1>
        </div>
      </div>
    </>

  );
}

export default App;
