import React, {FC} from 'react';

import PrimaryDataBlock from '../primary-data-block';
import Navigation from '../navigation';
import JeneralInfo from '../jeneral-info';
import Skills from '../skills';
import styles from './main-page.module.less';


const MainPage:FC = () => {

	return (
		<main>
			<Navigation />
			<PrimaryDataBlock />
			<JeneralInfo />
			<Skills />
		</main>
	);
};

export default MainPage;