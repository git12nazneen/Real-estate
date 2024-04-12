import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../firebase.config';
export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // sign in user
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const githubProvider = new GithubAuthProvider();
    // github login
    const githubLogin = () =>{
        return signInWithPopup(auth, githubProvider)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    useEffect( ()=>{
      const unSubscribe = onAuthStateChanged(auth, createUser =>{
            console.log('user in the auth state', createUser);
            setUser(createUser);
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
        githubLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
         {children}
        </AuthContext.Provider>
     );
};

export default AuthProvider;