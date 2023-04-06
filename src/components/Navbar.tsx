import { useState } from "react";

import { SlNotebook } from 'react-icons/sl';

const Navbar = () => {
    const [currentUser, setCurrentUser] = useState("John Doe");

    return (
        <nav className="flex items-center p-3 shadow justify-between">
            <div className="mx-1 flex items-center">
                <SlNotebook className="text-xl mr-2"/>
                <h1 className="font-bold text-xl">FinTrack</h1>
            </div>
            <div>
                <p>{ currentUser }</p>
            </div>
        </nav>
    )
}

export default Navbar;