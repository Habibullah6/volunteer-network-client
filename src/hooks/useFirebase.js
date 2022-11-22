import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {

    const [user, setUser] = useState({})

    const auth = getAuth()

    const handleGoogleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)

    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch({

            })

    }

    // observer
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {

            }
        });
    }, [])


    return {
        setUser,
        handleGoogleSignIn,
        handleSignOut,
        user
    }
}


export default useFirebase;