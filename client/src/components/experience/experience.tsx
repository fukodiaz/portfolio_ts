import React, {FC, ReactElement} from 'react';

import CardExperience from '../card-experience';
import { experienceData, ExperienceData} from '../../data/experienceData';
import imgExperience from './imgExperience.svg';
import styles from './experience.module.less';

const Experience: FC = () =>  {
	const createItemExperience = (data: ExperienceData): ReactElement => {
		return <CardExperience {...data} />
	} 

	return (
		<section id='experience' className={styles.wrapperExperience}>
			<div className={styles.innerBoxExperience}>
				<div className={styles.boxImgExperience}>
					<img  src={imgExperience} alt='picture_experience'
							className={styles.imgExperience} />
				</div>
				<div className={styles.boxDescrExperience}>
					<h2 className={styles.headerExperience}>Опыт</h2>
					{
						experienceData?.map(createItemExperience)
					}
				</div>
			</div>
		</section>
	)
};

export default Experience;