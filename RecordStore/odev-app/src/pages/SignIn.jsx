import { useState, useCallback } from "react";
import { signInWithEmailAndPassword, } from "firebase/auth";
import { auth } from "../config/firebase";
import { Link } from "react-router-dom";
import { GoogleButton } from 'react-google-button';
import { UserAuth } from "../context/AuthContext";

const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {googleSignIn} = UserAuth();
    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = useCallback
    (
        (e) => {
            e.preventDefault();
            if (!email || !password) {
                return;
        }

        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert("You have successfully signed in");
        })
        .catch((e) => {
            console.log(e);
        });
    },
        [email, password]
        );

  

    return (
        <div className="max-w-md mx-autopy-12 inline-block align-middle p-5">
            <h1 className="text-3xl">Welcome to the club</h1>
            <form onSubmit={handleSubmit}
            className="flex flex-col gap-4 mt-8">
                <input 
                type="email" 
                placeholder="Enter your email"
                className="p-3 bg-gray-100 rounded-md text-black"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                />
                <input 
                type="password" 
                placeholder="Enter your password"
                className="p-3 bg-gray-100 rounded-md text-black"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}/>
                <Link to="/forgot-password" className="ml-auto">Forgot Password?</Link>
                <input 
                type="submit" 
                className="p-3 bg-gray-100 rounded-md text-black" 
                value={"Sign In"}
                />
                <div className="max-w-[240px] -auto  py-4"> <GoogleButton
  onClick={handleGoogleSignIn}/></div>
                <Link to="/sign-up">Don't have an account ? Please sign up !</Link>
            </form>
        </div>
    );
};


export default SignIn;