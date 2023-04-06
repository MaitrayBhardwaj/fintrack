import { useState } from "react";

import Trxn from "./Trxn";

import TrxnProps from "../interfaces/TrxnProps";
import AddTrxn from "./AddTrxn";

const Transactions = () => {
    const [trxns, setTrxns] = useState<TrxnProps[]>([]);
    const [isAddTrxn, setIsAddTrxn] = useState(false);
    
    const addTrxn = (newTrxn: TrxnProps) => {
        setTrxns(prevTrxns => [...prevTrxns, newTrxn]);
    }
    
    const handleAddTrxn = () => {
        setIsAddTrxn(true);
    }
    
    const handleDeleteTrxn = (trxnId: string) => {
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
        />
    ))

    return (
        <>
            { isAddTrxn && <AddTrxn onSubmit={addTrxn} onClose={() => setIsAddTrxn(false)}/> }
            <div className="flex flex-col items-center">
                <div className="flex justify-center my-3">
                    <div className="flex flex-col p-4 text-center items-center border-r">
                        <div className="text-3xl my-2">$ 12500</div>
                        <div className="text-gray-500">Total Balance</div>
                    </div>
                    <div className="flex flex-col p-4 text-center items-center border-r">
                        <div className="text-3xl my-2 text-green-500">+ $ 1500</div>
                        <div className="text-gray-500">Earned this month</div>
                    </div>
                    <div className="flex flex-col p-4 text-center items-center">
                        <div className="text-3xl my-2 text-rose-500">- $ 500</div>
                        <div className="text-gray-500">Spent this month</div>
                    </div>
                </div>
                <a href="#" className="my-2 hover:text-blue-500">See more statistics </a>
            </div>
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