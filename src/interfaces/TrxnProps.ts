interface TrxnProps {
    trxnName: string;
    trxnAmt: number;
    trxnCategory: 'Food' | 'Shopping' | 'Bills' | 'Leisure' | 'Travel';
    trxnType: 'Income' | 'Expense';
}

export default TrxnProps;