import { useState } from "react";

const Navbar = () => {
    const [currentUser, setCurrentUser] = useState("John Doe");

    return (
        <nav className="flex items-center p-2 shadow justify-between">
            <div className="mx-2 flex items-center">
                <h1 className="font-bold text-xl">FinTrack</h1>
            </div>
            <div>
                <p>{ currentUser }</p>
            </div>
        </nav>
    )
}

export default Navbar;