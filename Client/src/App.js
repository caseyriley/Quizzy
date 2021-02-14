import React, {useState, useEffect, useRef} from 'react';
import Navbar from './Components/Navbar';
// import quizz from './Apprentice_TandemFor400_Data.json';
import Question from './Question';


function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]];
  }
}
// shuffle(quizz)

// let answersArray0 =  [quizz[0].incorrect[0], quizz[0].incorrect[1], quizz[0].incorrect[2], quizz[0].correct];
// shuffle(answersArray0)
// let answersArray1 =  [quizz[1].incorrect[0], quizz[1].incorrect[1], quizz[1].incorrect[2], quizz[1].correct];
// shuffle(answersArray1)
// let answersArray2 =  [quizz[2].incorrect[0], quizz[2].incorrect[1], quizz[2].incorrect[2], quizz[2].correct];
// shuffle(answersArray2)
// let answersArray3 =  [quizz[3].incorrect[0], quizz[3].incorrect[1], quizz[3].incorrect[2], quizz[3].correct];
// shuffle(answersArray3)
// let answersArray4 =  [quizz[4].incorrect[0], quizz[4].incorrect[1], quizz[4].incorrect[2], quizz[4].correct];
// shuffle(answersArray4)
// let answersArray5 =  [quizz[5].incorrect[0], quizz[5].incorrect[1], quizz[5].incorrect[2], quizz[5].correct];
// shuffle(answersArray5)
// let answersArray6 =  [quizz[6].incorrect[0], quizz[6].incorrect[1], quizz[6].incorrect[2], quizz[6].correct];
// shuffle(answersArray6)
// let answersArray7 =  [quizz[7].incorrect[0], quizz[7].incorrect[1], quizz[7].incorrect[2], quizz[7].correct];
// shuffle(answersArray7)
// let answersArray8 =  [quizz[8].incorrect[0], quizz[8].incorrect[1], quizz[8].incorrect[2], quizz[8].correct];
// shuffle(answersArray8)
// let answersArray9 =  [quizz[9].incorrect[0], quizz[9].incorrect[1], quizz[9].incorrect[2], quizz[9].correct];
// shuffle(answersArray9)

const App = () => {

  const answersArray0 = useRef()
  const answersArray1 = useRef()
  const answersArray2 = useRef()
  const answersArray3 = useRef()
  const answersArray4 = useRef()
  const answersArray5 = useRef()
  const answersArray6 = useRef()
  const answersArray7 = useRef()
  const answersArray8 = useRef()
  const answersArray9 = useRef()
  const [quizzState, setQuizzState] = useState();

  useEffect(()=>{
    let quizz = [];
    const getQna = async () => {
    fetch('http://localhost:8080/questions', {
      method: "GET",
      mode: "cors"
    })
    .then(res => res.json())
    .then(json => {
      // console.log(JSON.parse(json[0]["qna"]))
      // console.log("JJJJJJJJJJJJJ",JSON.parse(json[0]))
      // quizz = JSON.parse(json);
      // setTimeout(() => {
      //   shuffle(quizz);
      //   setQuizzState(quizz)
      // }, 500);
    })
    // .then(() => {
    //   answersArray0.current =  [quizz[0]["qna"].incorrect[0], quizz[0]["qna"].incorrect[1], quizz[0]["qna"].incorrect[2], quizz[0]["qna"].correct];
    //   shuffle(answersArray0.current)
    //   answersArray1.current =  [quizz[1].incorrect[0], quizz[1].incorrect[1], quizz[1].incorrect[2], quizz[1].correct];
    //   shuffle(answersArray1.current)
    //   answersArray2.current =  [quizz[2].incorrect[0], quizz[2].incorrect[1], quizz[2].incorrect[2], quizz[2].correct];
    //   shuffle(answersArray2.current)
    //   answersArray3.current =  [quizz[3].incorrect[0], quizz[3].incorrect[1], quizz[3].incorrect[2], quizz[3].correct];
    //   shuffle(answersArray3.current)
    //   answersArray4.current =  [quizz[4].incorrect[0], quizz[4].incorrect[1], quizz[4].incorrect[2], quizz[4].correct];
    //   shuffle(answersArray4.current)
    //   answersArray5.current =  [quizz[5].incorrect[0], quizz[5].incorrect[1], quizz[5].incorrect[2], quizz[5].correct];
    //   shuffle(answersArray5.current)
    //   answersArray6.current =  [quizz[6].incorrect[0], quizz[6].incorrect[1], quizz[6].incorrect[2], quizz[6].correct];
    //   shuffle(answersArray6.current)
    //   answersArray7.current =  [quizz[7].incorrect[0], quizz[7].incorrect[1], quizz[7].incorrect[2], quizz[7].correct];
    //   shuffle(answersArray7.current)
    //   answersArray8.current =  [quizz[8].incorrect[0], quizz[8].incorrect[1], quizz[8].incorrect[2], quizz[8].correct];
    //   shuffle(answersArray8.current)
    //   answersArray9.current =  [quizz[9].incorrect[0], quizz[9].incorrect[1], quizz[9].incorrect[2], quizz[9].correct];
    //   shuffle(answersArray9.current)
    // })
    .catch(err => {
      // console.log(err)
    })
      

    }
    getQna();
  },[]);
//{"question":".splice() does what in JS?","incorrect":["Combines 2 strings","Combines 2 arrays","Changes the contents of an string by removing or replacing existing elements and/or adding new elements"],"correct":"Changes the contents of an array by removing or replacing existing elements and/or adding new elements"}
  const [pointsState, setPointsState] = useState({"q0":0, "q1":0, "q2":0, "q3":0, "q4":0, "q5":0, "q6":0, "q7":0, "q8":0, "q9":0});
  const [totallState, setTotallState] = useState(0);
  const [scoreModalState, setScoreModalState] = useState(false);

  function submit(){
    let count = 0;
    for (const answer in pointsState){
      count = count + pointsState[answer];
    }
    setTotallState(count);
    setScoreModalState(true);
  }
   
  function reload() {
    window.location.reload();
  }

  function closeScorModal(){
    setScoreModalState(false);
  }

  const hitBackend = async () => {
    let response = await fetch('http://localhost:8080/test', {
      method: "GET",
      mode: "cors"
    })
    if (!response.ok){
      console.log("response !ok")
    } else {
      const json = await response.json()
      console.log(json.data)
    }
  }
 
  return (
    <>
      <div id={"main"}>
        <Navbar/>
        <h1 id={'main__title'}>QUIZ SAUCE</h1>
        <div id={"instructions"}>
          <p>Answer 10 multiple choice questions and click the submit button to see your score.</p>
          <p>The correct answers will be displayed only after submitting your answers.</p>
          <p>The questions provided are random so each time you play the questions will be different.</p>
        </div>
        {quizzState ?
        <>
        <Question question={quizzState[0].question} answers={answersArray0.current} correct={quizzState[0] && quizzState[0].correct} pointsState={pointsState} setPointsState={setPointsState} qId={0}/>
        <Question question={quizzState[1].question} answers={answersArray1.current} correct={quizzState[1] && quizzState[1].correct} pointsState={pointsState} setPointsState={setPointsState} qId={1}/>
        <Question question={quizzState[2].question} answers={answersArray2.current} correct={quizzState[2] && quizzState[2].correct} pointsState={pointsState} setPointsState={setPointsState} qId={2}/>
        <Question question={quizzState[3].question} answers={answersArray3.current} correct={quizzState[3] && quizzState[3].correct} pointsState={pointsState} setPointsState={setPointsState} qId={3}/>
        <Question question={quizzState[4].question} answers={answersArray4.current} correct={quizzState[4] && quizzState[4].correct} pointsState={pointsState} setPointsState={setPointsState} qId={4}/>
        <Question question={quizzState[5].question} answers={answersArray5.current} correct={quizzState[5] && quizzState[5].correct} pointsState={pointsState} setPointsState={setPointsState} qId={5}/>
        <Question question={quizzState[6].question} answers={answersArray6.current} correct={quizzState[6] && quizzState[6].correct} pointsState={pointsState} setPointsState={setPointsState} qId={6}/>
        <Question question={quizzState[7].question} answers={answersArray7.current} correct={quizzState[7] && quizzState[7].correct} pointsState={pointsState} setPointsState={setPointsState} qId={7}/>
        <Question question={quizzState[8].question} answers={answersArray8.current} correct={quizzState[8] && quizzState[8].correct} pointsState={pointsState} setPointsState={setPointsState} qId={8}/>
        <Question question={quizzState[9].question} answers={answersArray9.current} correct={quizzState[9] && quizzState[9].correct} pointsState={pointsState} setPointsState={setPointsState} qId={9}/>
        </>
        : null
        }
        <div id={"main__submit"} onClick={submit}> 
          <h3 >SUBMIT</h3>
        </div>
      </div>
      {quizzState ? 
      <div className={`${scoreModalState === true ? "main__score-modal-open" : "main__score-modal-close"}`} onClick={reload} >
        <div id={"main__score-modal-open__point-c"}>
          <h1 id={"main__score-modal-open__point-c__title"}>YOUR SCORE</h1>
          <h1 id={"main__score-modal-open__point-c__points"}>{totallState}</h1>
          <div className={"main__score-modal-open__answers"}>  
            <div id={"answers-title"}>
              <h2 id={"answers-title__h2"}>correct answers below</h2>
            </div>
            <div className={"modal-answer"}>
              <p className={"modal-answer__p1"}>{quizzState[0] ? quizzState[0].question : ""}</p>
              <p className={"modal-answer__p2"}>{quizzState[0] ? quizzState[0].correct : ""}</p>
            </div>
            <div className={"modal-answer"}>
              <p className={"modal-answer__p1"}>{quizzState[1].question}</p>
              <p className={"modal-answer__p2"}>{quizzState[1].correct}</p>
            </div>
            <div className={"modal-answer"}>
              <p className={"modal-answer__p1"}>{quizzState[2].question}</p>
              <p className={"modal-answer__p2"}>{quizzState[2].correct}</p>
            </div>
            <div className={"modal-answer"}>
              <p className={"modal-answer__p1"}>{quizzState[3].question}</p>
              <p className={"modal-answer__p2"}>{quizzState[3].correct}</p>
            </div>
            <div className={"modal-answer"}>
              <p className={"modal-answer__p1"}>{quizzState[4].question}</p>
              <p className={"modal-answer__p2"}>{quizzState[4].correct}</p>
            </div>
            <div className={"modal-answer"}>
              <p className={"modal-answer__p1"}>{quizzState[5].question}</p>
              <p className={"modal-answer__p2"}>{quizzState[5].correct}</p>
            </div>
            <div className={"modal-answer"}>
              <p className={"modal-answer__p1"}>{quizzState[6].question}</p>
              <p className={"modal-answer__p2"}>{quizzState[6].correct}</p>
            </div>
            <div className={"modal-answer"}>
              <p className={"modal-answer__p1"}>{quizzState[7].question}</p>
              <p className={"modal-answer__p2"}>{quizzState[7].correct}</p>
            </div>
            <div className={"modal-answer"}>
              <p className={"modal-answer__p1"}>{quizzState[8].question}</p>
              <p className={"modal-answer__p2"}>{quizzState[8].correct}</p>
            </div>
            <div className={"modal-answer"}>
              <p className={"modal-answer__p1"}>{quizzState[9].question}</p>
              <p className={"modal-answer__p2"}>{quizzState[9].correct}</p>
            </div>
            <p></p>
          </div>
        </div>
      </div>
      : null}
    </>

  );
};

export default App;
