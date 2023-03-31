import React, {FC} from 'react';
import {Routes, Route} from 'react-router-dom';

import MainPage from '../main-page';

import styles from './app.module.less';

const App:FC = () => {

	return (
		<div className={styles.mainWrapper}>
			<Routes>
				<Route path='/' element={<MainPage />} />
			</Routes>
		</div>
	);
}

export default App;