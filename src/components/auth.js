import React, { useState } from "react";
import { useUserContext } from "../context/userContext";
import Signin from "./signin";
import Signup from "./signup";

const Auth = () => {
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };

  const { signInWithGoogle, signInWithGithub, signInWithPhone, onSignInSubmit } = useUserContext();

  return (
    <div className="container">
      {/* {!index ? <Signin /> : <Signup />} */}
      {/* <button onClick={signInWithGoogle}> Continue with Google </button> */}
      {/*<button onClick={signInWithGithub}> Continue with GitHub </button>*/}
      {/*<button id="sign-in-button" onClick={signInWithPhone}> Continue with Phone </button>*/}
      <button id="sign-in-button" onClick={onSignInSubmit}> Continue with Phone </button>
      {/* <p onClick={toggleIndex}>
        {!index ? "New user? Click here " : "Already have an acount?"}
      </p> */}
    </div>
  );
};

export default Auth;
