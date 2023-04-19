import { useState } from "react"

import Navbar from "./components/Navbar"
import Transactions from "./components/Transactions"

import { BalanceContext, BalDetailsType } from "./context/BalanceContext"
import { UserContext, UserType } from "./context/UserContext"

function App() {
    const [balDetails, setBalDetails] = useState<BalDetailsType>({
        total: 0,
        earned: 0,
        spent: 0
    })

    const [user, setUser] = useState<UserType>({
        email: "",
        name: "",
        uid: "",
    })
    
    return (
        <div className="font-std">
            <UserContext.Provider value={{ user, setUser }}>
                <Navbar />
                <BalanceContext.Provider value={{ balDetails, setBalDetails }}>
                    <div>
                        <Transactions />
                    </div>
                </BalanceContext.Provider>
            </UserContext.Provider>
        </div>
    )
}

export default App
