import { useState } from "react";

import Trxn from "./Trxn";

import TrxnProps from "../interfaces/TrxnProps";
import AddTrxn from "./AddTrxn";

const Transactions = () => {
    const [trxns, setTrxns] = useState<TrxnProps[]>([]);
    const [isAddTrxn, setIsAddTrxn] = useState(false);

    const trxnElements = trxns.map((trxn, index) => (
        <Trxn key={index} 
            trxnName={trxn.trxnName} 
            trxnAmt={trxn.trxnAmt} 
            trxnCategory={trxn.trxnCategory} 
            trxnType={trxn.trxnType} 
        />
    ))

    const addTrxn = (newTrxn: TrxnProps) => {
        setTrxns(prevTrxns => [...prevTrxns, newTrxn]);
    }

    const handleAddTrxn = () => {
        setIsAddTrxn(true);
    }

    return (
        <>
            { isAddTrxn && <AddTrxn onSubmit={addTrxn} onClose={() => setIsAddTrxn(false)}/> }
            <div className="p-3">
                <div className="flex justify-between">
                    <h2 className="text-2xl font-bold">Transactions</h2>
                    <button onClick={handleAddTrxn} className="px-3 py-1 text-white bg-blue-500 rounded-md">Add Trxn</button>
                </div>
                <div className='mt-2'>
                    { trxnElements }
                </div>
            </div>
        </>
    )
}

export default Transactions;