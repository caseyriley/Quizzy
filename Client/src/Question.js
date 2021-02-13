import React, {useState} from 'react';


const Question = (props) => {

  const [checkState, setCheckState] = useState({0: false, 1: false, 2: false, 3: false});

  function check0(){
    setCheckState({0: true, 1: false, 2: false, 3: false})
    if(props.answers[0] === props.correct) {
      const points = props.pointsState;
      points[`q${props.qId}`] = 1;
      props.setPointsState(points);
    } else {
      const points = props.pointsState;
      points[`q${props.qId}`] = 0;
      props.setPointsState(points);
    };
  };

  function check1(){
    setCheckState({0: false, 1: true, 2: false, 3: false});
    if(props.answers[1] === props.correct) {
      const points = props.pointsState;
      points[`q${props.qId}`] = 1;
      props.setPointsState(points);
    } else {
      const points = props.pointsState;
      points[`q${props.qId}`] = 0;
      props.setPointsState(points);
    };
  };

  function check2(){
    setCheckState({0: false, 1: false, 2: true, 3: false});
    if(props.answers[2] === props.correct) {
      const points = props.pointsState;
      points[`q${props.qId}`] = 1;
      props.setPointsState(points);
    } else {
      const points = props.pointsState;
      points[`q${props.qId}`] = 0;
      props.setPointsState(points);
    };
  };

  function check3(){
    setCheckState({0: false, 1: false, 2: false, 3: true});
    if(props.answers[3] === props.correct) {
      const points = props.pointsState;
      points[`q${props.qId}`] = 1;
      props.setPointsState(points);
    } else {
      const points = props.pointsState;
      points[`q${props.qId}`] = 0;
      props.setPointsState(points);
    };
  };



  return (
    <div className={"question"}>
      <h2 >{props.question}</h2>
      
      <div className={"question__answer"}>
        <input className={"question__answer__input"} type="checkbox" name="check" onChange={check0} checked={checkState ? checkState[0] : false}/>
        <p>{props.answers[0]}</p>
      </div>
      <div className={"question__answer"}>
        <input className={"question__answer__input"} type="checkbox" name="check" onChange={check1} checked={checkState ? checkState[1] : false}/>
        <p>{props.answers[1]}</p>
      </div>
      <div className={"question__answer"}>
        <input className={"question__answer__input"} type="checkbox" name="check" onChange={check2} checked={checkState ? checkState[2] : false}/> 
        <p>{props.answers[2]}</p>
      </div>
      <div className={"question__answer"}>
        <input className={"question__answer__input"} type="checkbox" name="check" onChange={check3} checked={checkState ? checkState[3] : false}/>
        <p>{props.answers[3]}</p>
      </div>
    </div>
  )
}
export default Question;