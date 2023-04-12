import React, {FC} from 'react';
import {Routes, Route} from 'react-router-dom';

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
			</Routes>
			<ItemUpward />
		</div>
	);
}

export default App;