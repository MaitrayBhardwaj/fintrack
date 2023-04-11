import { useState, useContext } from "react";

import Trxn from "./Trxn";
import Hero from "./Hero"

import TrxnProps from "../interfaces/TrxnProps";
import AddTrxn from "./AddTrxn";

import { BalanceContext, BalanceContextType } from "../context/BalanceContext";

const Transactions = () => {
    const [trxns, setTrxns] = useState<TrxnProps[]>([]);
    const [isAddTrxn, setIsAddTrxn] = useState(false);
    
    const { balDetails, setBalDetails } = useContext(BalanceContext) as BalanceContextType

    const addTrxn = (newTrxn: TrxnProps) => {
        setTrxns(prevTrxns => [...prevTrxns, newTrxn]);
        const { total, earned, spent } = balDetails
        
        let newTotal = total, newEarned = earned, newSpent = spent;

        if(newTrxn.trxnType == 'Expense') {
            newTotal -= newTrxn.trxnAmt
            newSpent += newTrxn.trxnAmt
        }
        else {
            newTotal += newTrxn.trxnAmt
            newEarned += newTrxn.trxnAmt
        }

        setBalDetails({ total: newTotal, earned: newEarned, spent: newSpent })
    }
    
    const handleAddTrxn = () => {
        setIsAddTrxn(true);
    }
    
    const handleDeleteTrxn = (trxnId: string) => {
        const { total, earned, spent } = balDetails
        const trxn = trxns.filter(t => t.trxnId === trxnId)[0]
        
        let newTotal = total, newEarned = earned, newSpent = spent;

        if(trxn.trxnType == 'Expense') {
            newTotal += trxn.trxnAmt
            newSpent -= trxn.trxnAmt
        }
        else {
            newTotal -= trxn.trxnAmt
            newEarned -= trxn.trxnAmt
        }

        setBalDetails({ total: newTotal, earned: newEarned, spent: newSpent })
        setTrxns(prevTrxns => prevTrxns.filter(trxn => trxn.trxnId !== trxnId))
    }

    const trxnElements = trxns.map((trxn) => (
        <Trxn key={trxn.trxnId} 
            trxnName={trxn.trxnName} 
            trxnAmt={trxn.trxnAmt}
            trxnId={trxn.trxnId} 
            trxnCategory={trxn.trxnCategory} 
            trxnType={trxn.trxnType}
            handleDelete={handleDeleteTrxn}
            trxnDate={trxn.trxnDate}
        />
    ))

    return (
        <>
            { isAddTrxn && <AddTrxn onSubmit={addTrxn} onClose={() => setIsAddTrxn(false)}/> }
            
            <Hero />

            <div className="p-3">
                <div className="flex justify-between">
                    <h2 className="text-2xl font-bold">Transactions</h2>
                    <button onClick={handleAddTrxn} className="px-3 py-1 text-white bg-blue-500 rounded-md">Add Trxn</button>
                </div>
                <div className='mt-4'>
                    {
                        trxnElements.length 
                        ?  trxnElements
                        : <div>No Transactions have been added</div> 
                    }
                </div>
            </div>
        </>
    )
}

export default Transactions;