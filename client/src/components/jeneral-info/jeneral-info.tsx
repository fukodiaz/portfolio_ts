import React, {FC} from 'react';

import {jeneralInfoData, TypeJeneralInfo} from '../../data/generalInfoData';
import {TbSquareRotatedFilled as Rhomb} from 'react-icons/tb';
import imageJenInfo from './imageJenInfo.svg';
import styles from './jeneral-info.module.less';

const JeneralInfo: FC = () => {

	return (
		<section id='about' className={styles.blockJeneralInfo}>
			<div className={styles.boxLineDecoration}>
				<Rhomb className={styles.rhomb} />
				<p className={styles.line}></p>
			</div>
			<div className={styles.wrapperContentInfo}>
				<div className={styles.contentInfo}>
					<h3 className={styles.titleJeneralInfo}>{jeneralInfoData.title}</h3>
					<div className={styles.descripJeneralInfo}>
						{jeneralInfoData.descriptionFirst} <br />
						{jeneralInfoData.descriptionSecond}
					</div>
				</div>
				<div className={styles.boxImageJeneralInfo}>
					<img src={imageJenInfo} alt='' />
				</div>
			</div>
		</section>
	);
};

export default JeneralInfo;