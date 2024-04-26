import { createContext, useEffect, useState } from "react";
import {  GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
import { Bounce } from "react-toastify";
import Swal from "sweetalert2";
import auth from "../firebase.config";

export const AuthContext = createContext(null);

// social auth providers

const twitterProvider = new TwitterAuthProvider();
const googleProvider = new GoogleAuthProvider();
// const facebookProvider = new FacebookAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create User
  const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  const createUser = async (email, password) => {


    if (!passwordRegex.test(password)) {
      toast.success('Week password')

      return;
  }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      Swal.fire({
        title: "Wow! Account Create successfully",
        icon: "success",
        confirmButtonText: '<a href="/">Say Thanks!</a>',
      });
      return userCredential.user;
    } catch (error) {
      toast.error(`${error.message}`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    }
  };


  // update user profile

  const updateUserProfile = async (image , name) => {
   await updateProfile(auth.currentUser, {
    photoURL: image,
      displayName: name
     
    });
  }

  // Sign in User
  const signInUser = async (email, password) => {
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      toast.error(`${error.message}`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    }
  };

//   google login

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)

  }

  // facebook login

//   const facebookLogin = () => {
//     setLoading(true);
//     return signInWithPopup(auth, facebookProvider)
//   }

  // Twitter login

  const twitterLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, twitterProvider)
  }


//   log Out User

  const logOutUser =async () => {
   await signOut(auth);
   toast.success('Log Out Successfully')
    setUser(null);
  }

  // Observer
  useEffect(() => {
    const unSubscribeUser = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => {
      unSubscribeUser();
    };
  }, []);

  const contextValue = { user, createUser , updateUserProfile, signInUser , logOutUser , googleLogin  , twitterLogin , loading};

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </AuthContext.Provider>
  
  );
};

export default AuthProvider;
