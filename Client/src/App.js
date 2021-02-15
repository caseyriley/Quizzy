import React, {useState, useEffect, useMemo} from 'react';
import Navbar from './Components/Navbar';
import { API_URL } from './config';
// import quizz from './Apprentice_TandemFor400_Data.json';
import Question from './Components/Question';


function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const App = () => {

  const [quizzState, setQuizzState] = useState();
  const [questionsState, setQuestionsState] = useState({});

  useEffect(()=>{
    let obj = {};
    function updateQuestions(key, value){
      obj[key] = value
    }
    let quizz = [];
    const getQna = async () => {
      fetch(`${API_URL}/questions`, {
        method: "GET",
        mode: "cors"
      })
      .then(res => res.json())
      .then(json => {
        
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
        setQuestionsState(obj);
      })
      .catch(err => {
        console.log(err)
      })
    }
    getQna();
  },[]);

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
  const qst = useMemo(()=>{
    return(
      quizzState && questionsState &&
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
    )
  },[quizzState, questionsState, pointsState])
 
  return (
    <>
      <div id={"main"}>
        <Navbar/>
        <div className={"undernav"}></div>
        <h1 id={'main__title'}>CODE SAUCE</h1>
        <div id={"instructions"}>
          <p>Answer 10 multiple choice questions and click the submit button to see your score.</p>
          <p>The correct answers will be displayed only after submitting your answers.</p>
          <p>The questions provided are random so each time you play the questions will be different.</p>
        </div>
        {qst}
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
              <p className={"modal-answer__p1"}>{quizzState[0]["qna"] ? quizzState[0]["qna"].question : ""}</p>
              <p className={"modal-answer__p2"}>{quizzState[0]["qna"] ? quizzState[0]["qna"].correct : ""}</p>
            </div>
            <div className={"modal-answer"}>
              <p className={"modal-answer__p1"}>{quizzState[1]["qna"].question}</p>
              <p className={"modal-answer__p2"}>{quizzState[1]["qna"].correct}</p>
            </div>
            <div className={"modal-answer"}>
              <p className={"modal-answer__p1"}>{quizzState[2]["qna"].question}</p>
              <p className={"modal-answer__p2"}>{quizzState[2]["qna"].correct}</p>
            </div>
            <div className={"modal-answer"}>
              <p className={"modal-answer__p1"}>{quizzState[3]["qna"].question}</p>
              <p className={"modal-answer__p2"}>{quizzState[3]["qna"].correct}</p>
            </div>
            <div className={"modal-answer"}>
              <p className={"modal-answer__p1"}>{quizzState[4]["qna"].question}</p>
              <p className={"modal-answer__p2"}>{quizzState[4]["qna"].correct}</p>
            </div>
            <div className={"modal-answer"}>
              <p className={"modal-answer__p1"}>{quizzState[5]["qna"].question}</p>
              <p className={"modal-answer__p2"}>{quizzState[5]["qna"].correct}</p>
            </div>
            <div className={"modal-answer"}>
              <p className={"modal-answer__p1"}>{quizzState[6]["qna"].question}</p>
              <p className={"modal-answer__p2"}>{quizzState[6]["qna"].correct}</p>
            </div>
            <div className={"modal-answer"}>
              <p className={"modal-answer__p1"}>{quizzState[7]["qna"].question}</p>
              <p className={"modal-answer__p2"}>{quizzState[7]["qna"].correct}</p>
            </div>
            <div className={"modal-answer"}>
              <p className={"modal-answer__p1"}>{quizzState[8]["qna"].question}</p>
              <p className={"modal-answer__p2"}>{quizzState[8]["qna"].correct}</p>
            </div>
            <div className={"modal-answer"}>
              <p className={"modal-answer__p1"}>{quizzState[9]["qna"].question}</p>
              <p className={"modal-answer__p2"}>{quizzState[9]["qna"].correct}</p>
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
