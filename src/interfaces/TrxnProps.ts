interface TrxnProps {
    trxnId: string;
    trxnName: string;
    trxnAmt: number;
    trxnCategory: 'Food' | 'Shopping' | 'Bills' | 'Leisure' | 'Travel';
    trxnType: 'Income' | 'Expense';
    handleDelete?: Function;
}

export default TrxnProps;