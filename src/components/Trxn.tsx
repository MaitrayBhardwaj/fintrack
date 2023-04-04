import TrxnProps from '../interfaces/TrxnProps';

import { IoFastFoodOutline, IoGameControllerOutline } from 'react-icons/io5';
import { RiShoppingBag3Line } from 'react-icons/ri';
import { MdCreditCard } from 'react-icons/md';
import { GiAirplaneDeparture } from 'react-icons/gi';

const Trxn = (props: TrxnProps) => {
    const { trxnAmt, trxnCategory, trxnName, trxnType } = props;

    const isExpense = trxnType === 'Expense';

    const categoryIcon = (() => {
        switch (trxnCategory) {
            case "Food":
                return <IoFastFoodOutline className="text-2xl" />
            case "Shopping":
                return <RiShoppingBag3Line className="text-2xl" />
            case "Bills":
                return <MdCreditCard className="text-2xl" />
            case "Leisure":
                return <IoGameControllerOutline className="text-2xl" />
            case "Travel":
                return <GiAirplaneDeparture className="text-2xl" />
            default:
                return <IoFastFoodOutline className="text-2xl" />
        }
    })()

    const trxnAmtClass = isExpense ? 'text-rose-500' : 'text-green-500';

    return (
        <div className="m-2 mt-0 border border-gray-200 p-2 flex items-center">
            <div className='bg-gray-200 rounded-md mr-2 p-2'>
                { categoryIcon }
            </div>
            <div>
                <h3 className="font-bold">{ trxnName }</h3>
                <div className={trxnAmtClass}>{ isExpense ? '-' : '+' } ${ trxnAmt }</div>
            </div>
        </div>
    )
}

export default Trxn;