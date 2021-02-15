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
        let numQ = 10;
        for (let i = 0; i < numQ; i ++){
          let answersArray = [quizz[i]["qna"].incorrect[0], quizz[i]["qna"].incorrect[1], quizz[i]["qna"].incorrect[2], quizz[i]["qna"].correct];
          shuffle(answersArray)
          updateQuestions(`a${i}`, answersArray)
        }
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

        { quizzState && questionsState &&
          [...Array(10)].map((el , i)=>{
            return(
            <Question key={i} question={quizzState[i]["qna"].question} answers={questionsState[`a${i}`]} correct={quizzState[i] && quizzState[i]["qna"].correct} pointsState={pointsState} setPointsState={setPointsState} qId={i}/>
            )
          })
        }

        <div id={"main__submit"} onClick={submit}> 
          <h3 >SUBMIT</h3>
        </div>
      </div>
      
      <div className={`${scoreModalState === true ? "main__score-modal-open" : "main__score-modal-close"}`} onClick={reload} >
        <div id={"main__score-modal-open__point-c"}>
          <h1 id={"main__score-modal-open__point-c__title"}>YOUR SCORE</h1>
          <h1 id={"main__score-modal-open__point-c__points"}>{totallState}</h1>
          <div className={"main__score-modal-open__answers"}>  
            <div id={"answers-title"}>
              <h2 id={"answers-title__h2"}>correct answers below</h2>
            </div>
            {quizzState && 
              [...Array(10)].map((el,i)=>{
                return(
                  <div key={i} className={"modal-answer"}>
                    <p className={"modal-answer__p1"}>{quizzState[i]["qna"].question}</p>
                    <p className={"modal-answer__p2"}>{quizzState[i]["qna"].correct}</p>
                  </div>
                )
              })
            }
            <p></p>
          </div>
        </div>
      </div>
    </>

  );
};

export default App;
