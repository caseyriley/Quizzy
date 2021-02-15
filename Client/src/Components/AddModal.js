import React, {useRef} from 'react';
import { API_URL } from './../config';

const AddModal = (props) => {
  const question = useRef();
  const correct = useRef();
  const false1 = useRef();
  const false2 = useRef();
  const false3 = useRef(); 
  
  function submit(e){
    e.preventDefault();
    // if (question.current.value === undefined && correct.current.current.value === undefined && false1.current.value === undefined && false2.current.value === undefined && false3.current.value === undefined){
      console.log("in if")
      const sub = {"question": question.current.value, "incorrect": [false1.current.value, false2.current.value, false3.current.value], "correct": correct.current.value};
      console.log("sub", sub)
      async function inner(){
        fetch(`${API_URL}/questions`, {
          method: "POST",
          mode: "cors",
          body: JSON.stringify(sub),
          headers: {
            'Content-Type': 'application/json'
          },
        })
        .then(res => {
          console.log("posted a quizz question")
          props.toggleAddModalState()
        })
        .catch(err => {
          console.log(err)
          props.toggleAddModalState()
        })
      }
      inner()
    // } else {
    //   console.log("in else")
    //   if (correct.current){
    //     correct.current.classList.add("add-err");
    //   }
    // }
    
  }
  return(
    <>
    <div className={"add-modal-background"}></div>
    <div className={"add-modal-c"}>
      <div className={"add-modal-close"} onClick={props.toggleAddModalState}>
        <div></div>
        <div></div>
      </div>
      <form className={"add-modal-form"}>
        <label>
          Question <br/>
          <textarea 
          ref={question}
          placeholder={"Add your quizz question here"}
          minlength={5} 
          maxlength={250}
          ></textarea>
        </label>
        <label>
          Correct Answer <br/>
          <textarea 
          ref={correct}
          placeholder={"Enter the correct answer to the quizz question here"}
          minlength={1} 
          maxlength={250}
          ></textarea>
        </label>
        <label>
          Wrong Answer 1<br/>
          <textarea 
          ref={false1}
          placeholder={"Enter an incorrect answer to the quizz question here"}
          minlength={1} 
          maxlength={250}
          ></textarea>
          </label>
        <label>
          Wrong Answer 2<br/>
          <textarea 
          ref={false2}
          placeholder={"Enter an incorrect answer to the quizz question here"}
          minlength={1} 
          maxlength={250}
          ></textarea>
          </label>
        <label>
          Wrong Answer 3<br/>
          <textarea 
          ref={false3}
          placeholder={"Enter an incorrect answer to the quizz question here"}
          minlength={1} 
          maxlength={250}
          ></textarea>
        </label>
        <button onClick={submit}>Submit</button>
     </form>
    </div>
    </>
  )
}
export default AddModal;