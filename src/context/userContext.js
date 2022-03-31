import React, { createContext, useContext, useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  PhoneAuthProvider,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { auth } from "../firebase";

auth.languageCode = 'it';

export const UserContext = createContext({});

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useState(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      if (res) {
        setUser(res);
      } else {
        setUser(null);
      }
      setError("");
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const registerUser = (email, password, name) => {
    setLoading(true);
    setError("");
    createUserWithEmailAndPassword(auth, email, password)
      .then(() =>
        updateProfile(auth.currentUser, {
          displayName: name,
        })
      )
      //   .then((res) => console.log(res))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  const signInUser = (email, password) => {
    setLoading(true);
    setError("");

    signInWithEmailAndPassword(auth, email, password)
      //   .then((res) => console.log(res))
      .catch((err) => setError(err.code))
      .finally(() => setLoading(false));
  };

  const signInWithGoogle = () => {
    setLoading(true);
    setError("");

    signInWithPopup(auth, new GoogleAuthProvider())
      //   .then((res) => console.log(res))
      .catch((err) => setError(err.code))
      .finally(() => setLoading(false));
  };

  const signInWithGithub = () => {
    setLoading(true);
    setError("");
    signInWithPopup(auth, new GithubAuthProvider())
      //   .then((res) => console.log(res))
      .catch((err) => setError(err.code))
      .finally(() => setLoading(false));
  };

  const signInWithPhone = () => {
    setLoading(true);
    setError("");
    signInWithPopup(auth, new PhoneAuthProvider())
      .then((res) => console.log(res))
      .catch((err) => setError(err.code))
      .finally(() => setLoading(false));
  };

  const logoutUser = () => {
    signOut(auth);
  };

  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const onSignInSubmit = (e) => {
    e.preventDefault();
    // setUpRecaptcha();

    if (Math.random() > 0.5) {
      console.log('Sorry')
      return
    } else {
      console.log('Nice')
    }
    // const phoneNumber = getPhoneNumberFromUserInput();
    const phoneNumber = '+78002000500';
    // const appVerifier = window.recaptchaVerifier;
    const appVerifier = new RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        console.log(response)
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        // onSignInSubmit();
      }
    }, auth);

    console.log(auth, phoneNumber, appVerifier)

    // const auth = getAuth();
    signInWithPhoneNumber(auth, phoneNumber)
    // signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        // ...

        // const code = getCodeFromUserInput();
        const code = window.prompt("OPT");
        confirmationResult.confirm(code).then((result) => {
          // User signed in successfully.
          const user = result.user;
          // ...
          console.log("User log in")
        }).catch((error) => {
          console.log(error, "bad verification code")
          // User couldn't sign in (bad verification code?)
          // ...
        });
      }).catch((error) => {
      console.log(error, "SMS not sent")
      // Error; SMS not sent
      // ...
    });
  }

  function setUpRecaptcha() {
    // window.recaptchaVerifier = new RecaptchaVerifier('sign-in', {
    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        console.log(response)
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        // onSignInSubmit();
      }
    }, auth);
  }

  const contextValue = {
    user,
    loading,
    error,
    signInUser,
    registerUser,
    logoutUser,
    forgotPassword,
    signInWithGoogle,
    signInWithGithub,
    signInWithPhone,
    onSignInSubmit,
  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
