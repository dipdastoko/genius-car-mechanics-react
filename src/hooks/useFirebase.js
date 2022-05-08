import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [users, setUsers] = useState({});


    const signInUsingGoole = () => {

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUsers(result.user);
            });
    };

    //observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUsers(user)
            }
            else {
                setUsers({})
            }
        })
        return () => unsubscribed;
    }, []);

    const logOut = () => {
        signOut(auth)
            .then(() => { });
    }

    return {
        users,
        signInUsingGoole,
        logOut
    }
}

export default useFirebase;