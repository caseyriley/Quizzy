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
    // console.log("question.current.value",question.current.value);
    if (question.current.value !== "" && correct.current.value !== "" && false1.current.value !== "" && false2.current.value !== "" && false3.current.value !== ""){
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
    } else 
      console.log("in else")
      const instructionsC = document.getElementById("add-modal-instructions-c");
      const instructions = document.getElementById("add-modal-instructions");
      instructionsC.classList.add("instructions-err")
      instructions.innerHTML = "Fill in the required fields below."
      

      const textareas = document.getElementsByTagName("textarea");
      for (let i = 0; i < textareas.length; i ++){
        textareas[i].classList.remove("add-err")
      }

      if (question.current.value === ""){
        question.current.classList.add("add-err");
      }
      if (correct.current.value === ""){
        correct.current.classList.add("add-err");
      }
      if (false1.current.value === ""){
        false1.current.classList.add("add-err");
      }
      if (false2.current.value === ""){
        false2.current.classList.add("add-err");
      }
      if (false3.current.value === ""){
        false3.current.classList.add("add-err");
      }
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
        <div id={"add-modal-instructions-c"} className={"add-modal-instructions-c"}>
          <p id={"add-modal-instructions"}>
            Use the form below to leave a multiple choice coding question for the 
            legacy of Code Sauce <span role="img" aria-label="smiling-cat">😸</span>
          </p>
        </div>
        <label>
          Question <br/>
          <textarea 
          ref={question}
          placeholder={"Add your quizz question here"}
          minLength={5} 
          maxLength={250}
          ></textarea>
        </label>
        <label>
          Correct Answer <br/>
          <textarea 
          ref={correct}
          placeholder={"Enter the correct answer to the quizz question here"}
          minLength={1} 
          maxLength={250}
          ></textarea>
        </label>
        <label>
          Wrong Answer 1<br/>
          <textarea 
          ref={false1}
          placeholder={"Enter an incorrect answer to the quizz question here"}
          minLength={1} 
          maxlength={250}
          ></textarea>
          </label>
        <label>
          Wrong Answer 2<br/>
          <textarea 
          ref={false2}
          placeholder={"Enter an incorrect answer to the quizz question here"}
          minLength={1} 
          maxLength={250}
          ></textarea>
          </label>
        <label>
          Wrong Answer 3<br/>
          <textarea 
          ref={false3}
          placeholder={"Enter an incorrect answer to the quizz question here"}
          minlength={1} 
          maxLength={250}
          ></textarea>
        </label>
        <button onClick={submit}>Submit</button>
     </form>
    </div>
    </>
  )
}
export default AddModal;