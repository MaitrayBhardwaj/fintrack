import { useState } from "react";

import { SlNotebook } from 'react-icons/sl';

const Navbar = () => {
    return (
        <nav className="flex items-center py-3 px-3 md:px-6 lg:px-24 shadow justify-between">
            <div className="mx-1 flex items-center">
                <SlNotebook className="text-xl mr-2"/>
                <h1 className="font-bold text-xl">FinTrack</h1>
            </div>
            <div>
                <button>
                    Sign In
                </button>
            </div>
        </nav>
    )
}

export default Navbar;