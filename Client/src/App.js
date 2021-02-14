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

  // const answersArray0 = useRef()
  // const answersArray1 = useRef()
  // const answersArray2 = useRef()
  // const answersArray3 = useRef()
  // const answersArray4 = useRef()
  // const answersArray5 = useRef()
  // const answersArray6 = useRef()
  // const answersArray7 = useRef()
  // const answersArray8 = useRef()
  // const answersArray9 = useRef()
  const [quizzState, setQuizzState] = useState();
  const [questionsState, setQuestionsState] = useState({});

  function updateQuestions(key, value){
    let obj = questionsState;
    obj[key] = value;
    setQuestionsState(obj)
  }

  useEffect(()=>{
    let quizz = [];
    const getQna = async () => {
    fetch('http://localhost:8080/questions', {
      method: "GET",
      mode: "cors"
    })
    .then(res => res.json())
    .then(json => {
      
      // quizz = json;
      json.forEach((el, i) => {
        let prev = JSON.parse(el["qna"]);
        json[i]["qna"] = prev;
      });
      console.log("JJJJJJJJJJJJJ", json[0]["qna"])
      return json;
    })
    .then(json => {

        quizz = json
        console.log("quizz===>",quizz)
        shuffle(quizz);
        setQuizzState(quizz)

    })
    .then(() => {
      let answersArray0 =  [quizz[0]["qna"].incorrect[0], quizz[0]["qna"].incorrect[1], quizz[0]["qna"].incorrect[2], quizz[0]["qna"].correct];
      shuffle(answersArray0)
      updateQuestions("a0", answersArray0)
      let answersArray1 =  [quizz[1]["qna"].incorrect[0], quizz[1]["qna"].incorrect[1], quizz[1]["qna"].incorrect[2], quizz[1]["qna"].correct];
      shuffle(answersArray1)
      updateQuestions("a1", answersArray1)
      let answersArray2 =  [quizz[2]["qna"].incorrect[0], quizz[2]["qna"].incorrect[1], quizz[2]["qna"].incorrect[2], quizz[2]["qna"].correct];
      shuffle(answersArray2)
      updateQuestions("a2", answersArray2)
      let answersArray3 =  [quizz[3]["qna"].incorrect[0], quizz[3]["qna"].incorrect[1], quizz[3]["qna"].incorrect[2], quizz[3]["qna"].correct];
      shuffle(answersArray3)
      updateQuestions("a3", answersArray3)
      let answersArray4 =  [quizz[4]["qna"].incorrect[0], quizz[4]["qna"].incorrect[1], quizz[4]["qna"].incorrect[2], quizz[4]["qna"].correct];
      shuffle(answersArray4)
      updateQuestions("a4", answersArray4)
      let answersArray5 =  [quizz[5]["qna"].incorrect[0], quizz[5]["qna"].incorrect[1], quizz[5]["qna"].incorrect[2], quizz[5]["qna"].correct];
      shuffle(answersArray5)
      updateQuestions("a5", answersArray5)
      let answersArray6 =  [quizz[6]["qna"].incorrect[0], quizz[6]["qna"].incorrect[1], quizz[6]["qna"].incorrect[2], quizz[6]["qna"].correct];
      shuffle(answersArray6)
      updateQuestions("a6", answersArray6)
      let answersArray7 =  [quizz[7]["qna"].incorrect[0], quizz[7]["qna"].incorrect[1], quizz[7]["qna"].incorrect[2], quizz[7]["qna"].correct];
      shuffle(answersArray7)
      updateQuestions("a7", answersArray7)
      let answersArray8 =  [quizz[8]["qna"].incorrect[0], quizz[8]["qna"].incorrect[1], quizz[8]["qna"].incorrect[2], quizz[8]["qna"].correct];
      shuffle(answersArray8)
      updateQuestions("a8", answersArray8)
      let answersArray9 =  [quizz[9]["qna"].incorrect[0], quizz[9]["qna"].incorrect[1], quizz[9]["qna"].incorrect[2], quizz[9]["qna"].correct];
      shuffle(answersArray9)
      updateQuestions("a9", answersArray9)
    })
    .catch(err => {
      console.log(err)
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
        {quizzState && questionsState ?
        <>
        <Question question={quizzState[0]["qna"].question} answers={questionsState["a0"]} correct={quizzState[0] && quizzState[0]["qna"].correct} pointsState={pointsState} setPointsState={setPointsState} qId={0}/>
        <Question question={quizzState[1]["qna"].question} answers={questionsState["a1"]} correct={quizzState[1] && quizzState[1]["qna"].correct} pointsState={pointsState} setPointsState={setPointsState} qId={1}/>
        <Question question={quizzState[2]["qna"].question} answers={questionsState["a2"]} correct={quizzState[2] && quizzState[2]["qna"].correct} pointsState={pointsState} setPointsState={setPointsState} qId={2}/>
        <Question question={quizzState[3]["qna"].question} answers={questionsState["a3"]} correct={quizzState[3] && quizzState[3]["qna"].correct} pointsState={pointsState} setPointsState={setPointsState} qId={3}/>
        <Question question={quizzState[4]["qna"].question} answers={questionsState["a4"]} correct={quizzState[4] && quizzState[4]["qna"].correct} pointsState={pointsState} setPointsState={setPointsState} qId={4}/>
        <Question question={quizzState[5]["qna"].question} answers={questionsState["a5"]} correct={quizzState[5] && quizzState[5]["qna"].correct} pointsState={pointsState} setPointsState={setPointsState} qId={5}/>
        <Question question={quizzState[6]["qna"].question} answers={questionsState["a6"]} correct={quizzState[6] && quizzState[6]["qna"].correct} pointsState={pointsState} setPointsState={setPointsState} qId={6}/>
        <Question question={quizzState[7]["qna"].question} answers={questionsState["a7"]} correct={quizzState[7] && quizzState[7]["qna"].correct} pointsState={pointsState} setPointsState={setPointsState} qId={7}/>
        <Question question={quizzState[8]["qna"].question} answers={questionsState["a8"]} correct={quizzState[8] && quizzState[8]["qna"].correct} pointsState={pointsState} setPointsState={setPointsState} qId={8}/>
        <Question question={quizzState[9]["qna"].question} answers={questionsState["a9"]} correct={quizzState[9] && quizzState[9]["qna"].correct} pointsState={pointsState} setPointsState={setPointsState} qId={9}/>
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
