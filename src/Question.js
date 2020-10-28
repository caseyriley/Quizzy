import React, {useState} from 'react';


const Question = (props) => {

  const useEffect = (()=> {
    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
    shuffle(props.answers)
  },[])

  

  

  // function onlyOne(checkbox) {
  //   var checkboxes = document.getElementsByName('check')
  //   checkboxes.forEach((item) => {
  //     console.log("id=====>",item.id)
  //       if (item.id !== checkbox) item.checked = false
  //   })

    const [checkState, setCheckState] = useState({0: false, 1: false, 2: false, 3: false});
    function check0(){
      setCheckState({0: true, 1: false, 2: false, 3: false})
    }
    function check1(){
      setCheckState({0: false, 1: true, 2: false, 3: false})
    }
    function check2(){
      setCheckState({0: false, 1: false, 2: true, 3: false})
    }
    function check3(){
      setCheckState({0: false, 1: false, 2: false, 3: true})
    }

    // const useEffect = (()=>{
    //   if (checkState[0] === true){
    //     const checked = getElementById("checkbox-1")
    //   }
    // }, [checkState])

  return (
    <div className={"question"}>
      <h2 >{props.question}</h2>
      <div className={"answer"}>
        <input className={"checkbox__input"} type="checkbox" name="check" onChange={check0} checked={checkState ? checkState[0] : false}/>
        <p>{props.answers[0]}</p>
      </div>
      <div className={"answer"}>
        <input className={"checkbox__input"} type="checkbox" name="check" onChange={check1} checked={checkState ? checkState[1] : false}/>
        <p>{props.answers[1]}</p>
      </div>
      <div className={"answer"}>
        <input className={"checkbox__input"} type="checkbox" name="check" onChange={check2} checked={checkState ? checkState[2] : false}/> 
        <p>{props.answers[2]}</p>
      </div>
      <div className={"answer"}>
        <input className={"checkbox__input"} type="checkbox" name="check" onChange={check3} checked={checkState ? checkState[3] : false}/>
        <p>{props.answers[3]}</p>
      </div>
    </div>
  )
}
export default Question;