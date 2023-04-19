import { useContext } from 'react'
import { BalanceContext, BalanceContextType } from "../context/BalanceContext"

const Hero = () => {
    const { balDetails } = useContext(BalanceContext) as BalanceContextType

    const { total, earned, spent } = balDetails

    return (
        <div className="flex flex-col items-center">
                <div className="flex flex-col md:flex-row justify-center my-3">
                    <div className="flex flex-col p-4 text-center items-center border-b md:border-r md:border-b-0">
                        <div className="text-2xl md:text-3xl my-2">
                            { total >= 0 ? '+' : '-' } $ { Intl.NumberFormat().format(Math.abs(total)) }
                        </div>
                        <div className="text-gray-500">Total Balance</div>
                    </div>
                    <div className="flex flex-col p-4 text-center items-center border-b md:border-r md:border-b-0">
                        <div className="text-2xl md:text-3xl my-2 text-green-500">
                            + $ { Intl.NumberFormat().format(earned) }
                        </div>
                        <div className="text-gray-500">Earned this month</div>
                    </div>
                    <div className="flex flex-col p-4 text-center items-center">
                        <div className="text-2xl md:text-3xl my-2 text-rose-500">
                            - $ { Intl.NumberFormat().format(spent) }
                        </div>
                        <div className="text-gray-500">Spent this month</div>
                    </div>
                </div>
                <a href="#" className="my-2 hover:text-blue-500">See more statistics </a>
        </div>
    )
}

export default Hero