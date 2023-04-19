import { useState } from 'react'

import SignIn from './SignIn';
import Login from './Login'

interface AuthUserProps {
    onClose: Function;
}

const AuthUser = (props: AuthUserProps) => {
    const [isSignIn, setIsSignIn] = useState(false)
    
    return (
        <div 
            className="absolute bg-gray-900/90 w-full h-full flex items-center justify-center"
            onClick={() => props.onClose()}
        >
            { 
                isSignIn ? 
                  <SignIn onClose={props.onClose} changeMode={() => setIsSignIn(false)} /> : 
                  <Login onClose={props.onClose} changeMode={() => setIsSignIn(true)} /> 
            }
        </div>
    )
}

export default AuthUser