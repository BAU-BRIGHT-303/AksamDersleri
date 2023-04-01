import { useState ,useCallback } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { Link } from "react-router-dom";


const SignUp = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            console.log(email,password)
            if(!email || !password){
                return;
            }
            createUserWithEmailAndPassword(auth,email,password).then(() => {
                alert("you have successfully signed")
            }).catch(() => {});
    },
    [email,password]);

    return (
    <div className="max-w-md mx-autopy-12 inline-block align-middle p-5">
    <h1 className="text-2xl">Create a new account !</h1>
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
    <input 
    type="email" 
    placeholder="Enter your email" 
    className="p-3 bg-gray-100 rounded-md text-black" 
    value={email} onChange={e => setEmail(e.currentTarget.value)}/>
    <input 
    type="password" 
    placeholder="Enter your password"  
    className="p-3 bg-gray-100 rounded-md text-black" 
    value={password} onChange={e => setPassword(e.currentTarget.value)} />
    <input 
    type="submit" 
    className="p-3 bg-gray-10 rounded-md" 
    value={"Sign Up !"} />
    <Link to ="/sign-in">Already have an account ? Please, sign in !</Link>
    </form>
    
    </div>
    )

};

    export default SignUp;