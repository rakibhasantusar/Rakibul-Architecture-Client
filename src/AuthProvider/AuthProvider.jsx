import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const providerLogin = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        localStorage.removeItem("token")
        setLoading(true)
        return signOut(auth)
    }
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (emai, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, emai, password)
    }
    const upDateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser === null || currentUser.uid) {
                setUser(currentUser)
            }
            setLoading(false)
        })

        return () => {
            unsubscribe()
        }
    }, [])

    const Authinfos = { user, loading, setLoading, providerLogin, logOut, createUser, signIn, upDateUserProfile, }

    return (
        <AuthContext.Provider value={Authinfos}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;