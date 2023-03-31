import React from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';

import ErrorBoundry from './components/error-boundry';
import App from './components/app';

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<ErrorBoundry>
			<Router>
				<App />
			</Router>
		</ErrorBoundry>
	</React.StrictMode>
);