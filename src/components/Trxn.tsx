import TrxnProps from '../interfaces/TrxnProps';

import { IoFastFoodOutline, IoGameControllerOutline, IoTrashOutline } from 'react-icons/io5';
import { RiShoppingBag3Line } from 'react-icons/ri';
import { MdCreditCard } from 'react-icons/md';
import { GiAirplaneDeparture } from 'react-icons/gi';

const Trxn = (props: TrxnProps) => {
    const { trxnAmt, trxnCategory, trxnName, trxnType, trxnDate, handleDelete } = props;

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

    const deleteTrxn = () => {
        if(handleDelete) {
            handleDelete(props.trxnId);
        }
    }

    const trxnAmtClass = isExpense ? 'text-rose-500' : 'text-green-500';

    return (
        <div 
            className="mb-2 border rounded-md border-gray-200 py-2 px-3 flex items-center justify-between hover:bg-gray-100 transition-all"
        >
            <div className='flex items-center text-sm md:text-base'>
                <div className='bg-zinc-200 rounded-md mr-2 p-2'>
                    { categoryIcon }
                </div>
                <div>
                    <div className="flex items-center">
                        <h3 className="font-bold">
                            { trxnName }
                        </h3>
                        <div className=" ml-1 text-gray-500">
                            •
                        </div>
                        <div className="text-gray-500 ml-1">
                            { trxnDate }
                        </div>
                    </div>
                    <div className={trxnAmtClass}>{ isExpense ? '-' : '+' } $ { Intl.NumberFormat().format(trxnAmt) }</div>
                </div>
            </div>
            <div>
                <button
                    onClick={deleteTrxn} 
                    className="bg-red-500 text-white text-sm md:text-base rounded-md p-2">
                    <IoTrashOutline />
                </button>
            </div>
        </div>
    )
}

export default Trxn;