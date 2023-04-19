import { useState, useContext } from "react";

import { SlNotebook } from 'react-icons/sl';
import { UserContext, UserContextType } from "../context/UserContext";

import AuthUser from "./AuthUser"

const Navbar = () => {
    const { user } = useContext(UserContext) as UserContextType
    const [openSignIn, setOpenSignIn] = useState(false)

    const handleSign = () => {
        if(user.uid === "") {
            setOpenSignIn(true)
        }
    }

    return (
        <>
            <nav className="flex items-center py-3 px-3 md:px-6 lg:px-24 shadow justify-between">
                <div className="mx-1 flex items-center">
                    <SlNotebook className="text-xl mr-2"/>
                    <h1 className="font-bold text-xl">FinTrack</h1>
                </div>
                <div>
                    <button onClick={handleSign}>
                        { user.uid === "" ? "Sign In" : user.name }
                    </button>
                </div>
            </nav>
            { openSignIn && <AuthUser onClose={() => setOpenSignIn(false)} /> }
        </>    
    )
}

export default Navbar;