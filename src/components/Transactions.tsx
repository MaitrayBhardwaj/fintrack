import { useState } from "react";

import Trxn from "./Trxn";

import TrxnProps from "../interfaces/TrxnProps";
import AddTrxn from "./AddTrxn";

const Transactions = () => {
    const [trxns, setTrxns] = useState<TrxnProps[]>([]);

    const trxnElements = trxns.map((trxn, index) => (
        <Trxn key={index} trxnName={trxn.trxnName} trxnAmt={trxn.trxnAmt} trxnCategory={trxn.trxnCategory} />
    ))

    const addTrxn = (newTrxn: TrxnProps) => {
        setTrxns(prevTrxns => [...prevTrxns, newTrxn]);
    }

    return (
        <div>
            <AddTrxn onSubmit={addTrxn}/>
            { trxnElements }
        </div>
    )
}

export default Transactions;