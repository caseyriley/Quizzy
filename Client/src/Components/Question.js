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
      
      <label className={`question__answer checkbox-label checkbox-c`} >
        <input 
          name={"check0"} 
          type={"checkbox"} 
          required
          onChange={check0} checked={checkState ? checkState[0] : false}
        />
        <span className="checkmark"></span>
        <span className="question__answer__text">{props.answers && props.answers[0]}</span>
      </label>

      <label className={`question__answer checkbox-label checkbox-c`} >
        <input 
          name={"check1"} 
          type={"checkbox"} 
          required
          onChange={check1} checked={checkState ? checkState[1] : false}
        />
        <span className="checkmark"></span>
        <span className="question__answer__text">{props.answers && props.answers[1]}</span>
      </label>

      <label className={`question__answer checkbox-label checkbox-c`} >
        <input 
          name={"check2"} 
          type={"checkbox"} 
          required
          onChange={check2} checked={checkState ? checkState[2] : false}
        />
        <span className="checkmark"></span>
        <span className="question__answer__text">{props.answers && props.answers[2]}</span>
      </label>

      <label className={`question__answer checkbox-label checkbox-c`} >
        <input 
          name={"check3"} 
          type={"checkbox"} 
          required
          onChange={check3} checked={checkState ? checkState[3] : false}
        />
        <span className="checkmark"></span>
        <span className="question__answer__text">{props.answers && props.answers[3]}</span>
      </label>

    </div>
  )
}
export default Question;