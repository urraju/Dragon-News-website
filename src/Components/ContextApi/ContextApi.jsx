

import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../Firebase/Firebase.config'

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading , setLoading] =useState(true)
    
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const gitHubLogin = ()  => {
        signInWithPopup(auth, githubProvider)
    }
   
    const resigter = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email , password)
    }
    
    const login = (email , password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
        });
    },[])

    const info = {
        user,
        resigter,
        login,
        logOut,
        loading,
        googleLogin,
        gitHubLogin,
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider