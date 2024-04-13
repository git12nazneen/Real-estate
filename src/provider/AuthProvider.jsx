import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../firebase.config';
export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const githubProvider = new GithubAuthProvider();
    const googleProvider = new GoogleAuthProvider();
    const [loading, setLoading] = useState(true)


    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // sign in user
    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }


    // github login
    const githubLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
    // google login
    const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    const logOut = () =>{
        return signOut(auth)
    }

    useEffect( ()=>{
      const unSubscribe = onAuthStateChanged(auth, createUser =>{
            console.log('user in the auth state', createUser);
            setUser(createUser);
            setLoading(false)
        });
        return() =>{
            unSubscribe();
        }
    })

    const authInfo = {
        user,
        createUser,
        logOut,
        signIn,
        githubLogin,
        googleLogin,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
         {children}
        </AuthContext.Provider>
     );
};

export default AuthProvider;