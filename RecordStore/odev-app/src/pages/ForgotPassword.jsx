import {useState,useCallback} from 'react';
import { Link } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../config/firebase';



const ForgotPassword = () => {

    const [email, setEmail] = useState("")

    const handleSubmit= useCallback((e) => {
        e.preventDefault();
        if (!email) {
        return;
        }

        sendPasswordResetEmail(auth, email).then(() => {
            alert("We have sent you a reset email. Check your mailbox");
        }).catch((e) => {
            console.log(e)
        });

    },   [email]);

  return (
    <div className="max-w-md mx-autopy-12 inline-block align-middle p-5">
      <h1 className="text-2xl">Forgot Password?</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8"> 
        <input type="email" placeholder='Enter your email' className="p-3 bg-gray-100 rounded-md text-black" value={email} onChange={e =>setEmail(e.currentTarget.value)} />
        <input type="submit" value='Reset password' className="p-3 bg-gray-100 rounded-md text-black" />
        <Link to ="/sign-in">or Sign in !</Link>
      </form>
    </div>
  )
}

export default ForgotPassword;
