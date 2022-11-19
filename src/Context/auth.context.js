import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.init';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';

export  const AuthContext = createContext();

        const auth = getAuth(app);




const AuthProvider = ({children}) => {

    const [user , setUser] = useState(null);

    const [loading, setLoading] = useState(true);


    ///// LogIn user ////////////////////////////////// 
    const logIn = (email,password) =>{
         setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }



     //// Register By using Email & Password (register function is called in Register.jsx)

     const register = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email , password)
     }


   ////// Update user profile ( get Name and Photo Url from the Registration Form and use them to Display User Profile Picture  )  
     const userProfileUpdate = (profile) =>{
        return updateProfile(auth.currentUser,profile);
     }

  
  /////////// Google Sign In //////////////////////
   const googleSignIn = (provider) =>{
      setLoading(true);
      return signInWithPopup(auth, provider);
   }


   ///////// Log Out ///////////////////////
   const log_out = () =>{
        setLoading(true);
        return signOut(auth);
   } 





   useEffect(()=>{

      const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
           setUser(currentUser);
           setLoading(false);
       })

       return ()=>{
            unsubscribe();   
         }
   },[])






  /////////// authData Provides All the variable Data of Authentication and Share them into many Components by using Context API //////////////// 
    const authData = {
          googleSignIn,
          loading,
          user,
          setUser,
          log_out,
          register,
          logIn,
          userProfileUpdate,
          


    }

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;