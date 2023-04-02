interface TrxnProps {
    trxnName: string;
    trxnAmt: number;
    trxnCategory: 'Food' | 'Shopping' | 'Bills' | 'Leisure' | 'Travel';
}

export default TrxnProps;