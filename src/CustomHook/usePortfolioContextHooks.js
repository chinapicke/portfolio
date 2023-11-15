import { useContext } from "react"
import PortfolioContext from "../Context/PortfolioContext"

const usePortfolioContextHooks = () => {
    return useContext(PortfolioContext)
}

export default usePortfolioContextHooks