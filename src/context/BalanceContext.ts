import { createContext } from 'react'

export interface BalDetailsType {
    total: number;
    spent: number;
    earned: number;
}

export interface BalanceContextType {
    balDetails: BalDetailsType;
    setBalDetails: (details: BalDetailsType) => void
}

export const BalanceContext = createContext<BalanceContextType | null>({
    balDetails: {
        total: 0,
        spent: 0,
        earned: 0
    },
    setBalDetails: function (details) {
        this.balDetails = details
    },
})