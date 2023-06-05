import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {auth} from "../config.js";

export function SignIn() {
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    };

    return (
        <div className="flex items-center justify-center w-56 h-56 bg-blue-300 m-20">
            <button className="flex rounded-2xl text-1xl border-2 border-white h-fit w-fit px-2 py-1 m-1
      hover:border-black hover:bg-white hover:text-black hover:font-bold text-xl text-white" onClick={signInWithGoogle}>
                Sign in with google
            </button>
        </div>
    );
}

export function SignOut() {
    return (
        auth.currentUser && (
            <button className="rounded-2xl flex text-1xl border-2 border-white h-fit w-fit px-2 py-1 m-5
      hover:border-black hover:bg-white hover:text-black hover:font-bold text-xl"
                    onClick={() => auth.signOut()}>
                Sign Out
            </button>
        )
    );
}
