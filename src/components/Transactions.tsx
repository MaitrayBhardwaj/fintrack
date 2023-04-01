import { useState } from "react";

import Trxn from "./Trxn";

import TrxnProps from "../interfaces/TrxnProps";

const Transactions = () => {
    const [trxns, setTrxns] = useState<TrxnProps[]>([]);

    const trxnElements = trxns.map((trxn, index) => (
        <Trxn key={index} trxnName={trxn.trxnName} trxnAmt={trxn.trxnAmt} trxnCategory={trxn.trxnCategory} />
    ))

    const addTrxn = () => {
        const newTrxn: TrxnProps = {
            trxnName: "New Trxn",
            trxnAmt: 100,
            trxnCategory: "Food"
        }

        setTrxns(prevTrxns => [...prevTrxns, newTrxn]);
    }

    return (
        <div>
            <button onClick={addTrxn}>Add</button>
            { trxnElements }
        </div>
    )
}

export default Transactions;