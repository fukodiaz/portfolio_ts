import React, {FC} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

import MainPage from '../main-page';
import PageProjects from '../page-projects';
import ItemUpward from '../item-upward';

import styles from './app.module.less';

const App:FC = () => {

	return (
		<div className={styles.mainWrapper}>
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/projects' element={<PageProjects />} />
				<Route path='*' element={<Navigate to="/" replace />} />
			</Routes>
			<ItemUpward />
		</div>
	);
}

export default App;