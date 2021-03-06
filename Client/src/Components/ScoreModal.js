import React from 'react';

const ScoreModal = (props) => {
  return (
    
    <div className={`${props.scoreModalState === true ? "main__score-modal-open" : "main__score-modal-close"}`} onClick={props.reload} >
      <div id={"main__score-modal-open__point-c"}>
        <h1 id={"main__score-modal-open__point-c__title"}>YOUR SCORE</h1>
        <h1 id={"main__score-modal-open__point-c__points"}>{props.totallState}/10</h1>
        <div className={"main__score-modal-open__answers"}>  
          <div id={"answers-title"}>
            <h2 id={"answers-title__h2"}>correct answers below</h2>
          </div>
          {props.quizzState && 
            [...Array(10)].map((el,i)=>{
              return(
                <div key={i} className={"modal-answer"}>
                  <p className={"modal-answer__p1"}>{props.quizzState[i]["qna"].question}</p>
                  <p className={`modal-answer__p2 ${props.pointsState[`q${i}`] === 0 && 'score-modal--error' }`}>{props.quizzState[i]["qna"].correct}</p>
                </div>
              )
            })
          }
          <p></p>
        </div>
      </div>
    </div>
  )
}
export default ScoreModal;