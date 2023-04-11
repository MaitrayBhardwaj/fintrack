import { useState } from "react"

import Navbar from "./components/Navbar"
import Transactions from "./components/Transactions"

import { BalanceContext, BalDetailsType } from "./context/BalanceContext"

function App() {
    const [balDetails, setBalDetails] = useState<BalDetailsType>({
        total: 0,
        earned: 0,
        spent: 0
    })
    
    return (
        <div className="font-std">
            <Navbar />
            <BalanceContext.Provider value={{ balDetails, setBalDetails }}>
                <div>
                    <Transactions />
                </div>
            </BalanceContext.Provider>
        </div>
    )
}

export default App
