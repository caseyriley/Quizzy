import React, { useRef } from "react";
import { API_URL } from "../config";

const LoginForm = (props) => {
  const email = useRef();
  const password = useRef();

  function loginSubmit() {
    const user = {
      email: email.current.value,
      password: password.current.value,
    };
    async function inner() {
      try {
        const response = await fetch(`${API_URL}/users/login`, {
          method: "POST",
          mode: "cors",
          body: JSON.stringify(user),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json = await response.json();
        if (json["token"]) {
          console.log("JSON", json);
          document.cookie = "quiz" + "=" + json["token"] + "; Path=/;";
          document.location.reload();
        } else {
          console.log("Error in login: 409");
        }
      } catch (error) {
        console.log("Error in login: ", error);
      }
    }
    inner();
  }

  async function demoLogin() {
    const demoEmail = "quark@gmail.com";
    const demoPassword = "QuantumFluctuation9";
    let speed = 70,
      i = 1,
      k = 0;

    const ghostWriteEmail = async () => {
      if (i <= demoEmail.length) {
        let text = demoEmail.slice(0, i);
        email.current.value = text;
        i++;
        setTimeout(ghostWriteEmail, speed);
      }
    };
    const ghostWritePassword = async () => {
      if (k <= demoPassword.length) {
        let text = demoPassword.slice(0, k);
        password.current.value = text;
        k++;
        setTimeout(ghostWritePassword, speed);
      }
    };
    await ghostWriteEmail();
    setTimeout(ghostWritePassword, speed * demoEmail.length);

    async function inner() {
      const user = {
        email: email.current.value,
        password: password.current.value,
      };
      try {
        const response = await fetch(`${API_URL}/users/login`, {
          method: "POST",
          mode: "cors",
          body: JSON.stringify(user),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json = await response.json();
        if (json["token"]) {
          console.log("JSON", json);
          document.cookie = "quiz" + "=" + json["token"] + "; Path=/;";
          document.location.reload();
        } else {
          console.log("Error in login: 409");
        }
      } catch (error) {
        console.log("Error in login: ", error);
      }
    }
    setTimeout(inner, 3300);
  }

  return (
    <div className={"login-form"}>
      <label>
        Email
        <input
          ref={email}
          required
          placeholder={"example@website.com"}
          minLength={5}
          maxLength={150}
        />
      </label>
      <label>
        Password
        <input
          ref={password}
          required
          placeholder={"superSecret3"}
          minLength={6}
          maxLength={150}
        />
      </label>
      <div className={"log-sign-login-button"} onClick={loginSubmit}>
        <span>Submit</span>
      </div>
      <div className={"log-sign-demo-button"} onClick={demoLogin}>
        <span>Demo Login</span>
      </div>
    </div>
  );
};
export default LoginForm;
