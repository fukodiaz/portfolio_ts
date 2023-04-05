import React, {FC} from 'react';

import {TbSquareRotatedFilled as Rhomb} from 'react-icons/tb';
import styles from './jeneral-info.module.less';

const JeneralInfo: FC = () => {

	return (
		<section id='about' className={styles.blockJeneralInfo}>
			<div className={styles.boxLineDecoration}>
				<Rhomb className={styles.rhomb} />
				<p className={styles.line}></p>
			</div>
		</section>
	);
};

export default JeneralInfo;