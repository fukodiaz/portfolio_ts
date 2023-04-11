import React, {FC, ReactNode, createContext} from 'react'
import PortfolioService from '../../services/portfolio-service'

type Props = {
	children: ReactNode
}

const portfolioService = new PortfolioService()
export const PortfolioServiceContext = createContext<any>(null) 

const PortfolioServiceProvider:FC<Props> = ({children}) => {
	return (
		<PortfolioServiceContext.Provider value={portfolioService}>
			{children}
		</PortfolioServiceContext.Provider>
	)
}

export default PortfolioServiceProvider