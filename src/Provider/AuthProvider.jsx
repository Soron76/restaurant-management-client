/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
    GithubAuthProvider,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth, onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup, signOut, updateProfile
} from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const GoogleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const GithubSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    }
    const handleUpdateProfile =(name, photo)=>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the auth state change', currentUser);
            setUser(currentUser);
            setLoading(false);

        });
        return () => {
            unSubscribe();
        };
    }, [])






    const authInfo = {
        user,
        createUser,
        signIn,
        
        GoogleSignIn,
        GithubSignIn,
        handleUpdateProfile,
        logOut,
        loading
        

    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;