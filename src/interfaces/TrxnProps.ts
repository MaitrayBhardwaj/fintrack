interface TrxnProps {
    trxnId: string;
    trxnName: string;
    trxnAmt: number;
    trxnCategory: 'Food' | 'Shopping' | 'Bills' | 'Leisure' | 'Travel';
    trxnType: 'Income' | 'Expense';
    trxnDate: string;
    handleDelete?: Function;
}

export default TrxnProps;