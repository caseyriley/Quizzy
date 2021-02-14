import React, {useRef} from 'react';

const AddModal = (props) => {
  const question = useRef();
  const correct = useRef();
  const false1 = useRef();
  const false2 = useRef();
  const false3 = useRef();
  function submit(e){
    e.preventDefault();
    const sub = {"question": question.current.value, "incorrect": [false1.current.value, false2.current.value, false3.current.value], "correct": correct.current.value};
    console.log("sub", sub)
    async function inner(){
      fetch('http://localhost:8080/questions', {
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