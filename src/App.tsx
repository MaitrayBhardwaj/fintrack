import { useState } from "react"

import Navbar from "./components/Navbar"
import Transactions from "./components/Transactions"

function App() {
    const [count, setCount] = useState(0)
    
    return (
        <div className="font-std">
            <Navbar />
            <div>
                <Transactions />
            </div>
        </div>
    )
}

export default App
