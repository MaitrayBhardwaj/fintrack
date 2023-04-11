import { useContext } from 'react'
import { BalanceContext, BalanceContextType } from "../context/BalanceContext"

const Hero = () => {
    const { balDetails } = useContext(BalanceContext) as BalanceContextType

    return (
        <div className="flex flex-col items-center">
                <div className="flex justify-center my-3">
                    <div className="flex flex-col p-4 text-center items-center border-r">
                        <div className="text-3xl my-2">$ { balDetails.total }</div>
                        <div className="text-gray-500">Total Balance</div>
                    </div>
                    <div className="flex flex-col p-4 text-center items-center border-r">
                        <div className="text-3xl my-2 text-green-500">+ $ { balDetails.earned }</div>
                        <div className="text-gray-500">Earned this month</div>
                    </div>
                    <div className="flex flex-col p-4 text-center items-center">
                        <div className="text-3xl my-2 text-rose-500">- $ { balDetails.spent }</div>
                        <div className="text-gray-500">Spent this month</div>
                    </div>
                </div>
                <a href="#" className="my-2 hover:text-blue-500">See more statistics </a>
        </div>
    )
}

export default Hero