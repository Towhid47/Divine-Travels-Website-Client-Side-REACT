import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.init';
import {getAuth, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth';

export  const AuthContext = createContext();

        const auth = getAuth(app);




const AuthProvider = ({children}) => {

    const [user , setUser] = useState(null);

    const [loading, setLoading] = useState(true);


  
  /////////// Google Sign In //////////////////////
   const googleSignIn = (provider) =>{
      setLoading(true);
      return signInWithPopup(auth, provider);
   }


   ///////// Log Out ///////////////////////
   const log_out = () =>{
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
          log_out


    }

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;