import React from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';

import ErrorBoundry from './components/error-boundry';
import PortfolioServiceProvider from './components/portfolio-service-provider';
import App from './components/app';

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<ErrorBoundry>
			<PortfolioServiceProvider>
				<Router>
					<App />
				</Router>
			</PortfolioServiceProvider>
		</ErrorBoundry>
	</React.StrictMode>
);