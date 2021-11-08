import firebaseInitialization from "../Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken } from "firebase/auth";
import { useEffect, useState } from "react";


firebaseInitialization()
const UseFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [token, setToken] = useState('')
    const [admin, setAdmin] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    // REGISTER
    const registerWithEmailAndPass = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const newUser = { email, displayName: name }
                saveUser(email, name, 'POST')
                setUser(newUser)
                setError('')
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });
                history.replace('/')
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            }).finally(() => setIsLoading(false));
    }

    // GOOGLE POPUP
    const signInWithGooglePopup = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT')
                setUser(user)
                const destination = location?.state?.from || '/';
                history.replace(destination)
            }).catch((error) => {
                setError(error.message);
            }).finally(() => setIsLoading(false));
    }

    // LOGIN
    const loginWithEmailAndPass = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination)

                // const user = userCredential.user;
                // setUser(user)
                setError('')

            })
            .catch((error) => {

                const errorMessage = error.message;
                setError(errorMessage)
            }).finally(() => setIsLoading(false));
    }

    // observe use State
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken)

                    })
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, [auth])

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            // An error happened.
        });
    }

    // FILTER ADMIN
    useEffect(() => {
        // setIsLoading(true)
        fetch(`https://fathomless-harbor-85399.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
        // .finally(() => setIsLoading(false))
    }, [user.email])


    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }
        fetch('https://fathomless-harbor-85399.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()

    }


    return {
        user,
        error,
        token,
        admin,
        isLoading,
        setIsLoading,
        registerWithEmailAndPass,
        signInWithGooglePopup,
        logOut,
        loginWithEmailAndPass,
    }

}

export default UseFirebase;