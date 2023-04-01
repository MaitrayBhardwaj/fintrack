import TrxnProps from '../interfaces/TrxnProps';

const Trxn = (props: TrxnProps) => {
    const { trxnAmt, trxnCategory, trxnName } = props;

    return (
        <div className="m-2 border border-gray-200 p-2">
            <h3 className="font-bold">{ trxnName }</h3>
            <div>- ${ trxnAmt }</div>
        </div>
    )
}

export default Trxn;