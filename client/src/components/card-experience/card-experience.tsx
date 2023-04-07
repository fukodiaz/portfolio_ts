import React, {FC} from 'react';
const Fade = require("react-reveal/Fade");

import { ExperienceData } from '../../data/experienceData';
import iconExperience from './iconBagExperience.svg';
import iconExperienceDark from './iconBagExperienceDark.svg';
import styles from './card-experience.module.less';

const CardExperience: FC<ExperienceData> = (props) => {
	const {	id, organization, specialization, startYear, 
				startMonth, endYear, endMonth} = props
	return (
		<Fade bottom>
			<div key={id} className={styles.itemExperience}>
				<div className={styles.boxImgCardExperience}>
					<img  src={iconExperienceDark} alt=''
							className={styles.imgCardExperience} />
				</div>
				<div className={styles.innerBoxDescrExperience}>
					<p className={styles.dateExperience}>
						{startMonth} {startYear} - {endMonth} {endYear}
					</p>
					<p className={styles.specializationExper}>
						{specialization}
					</p>
					{
						organization && (
							<p className={styles.organizationExper}>
								{organization}
							</p>
						)
					}
						
				</div>
			</div>
		</Fade>
	)
}

export default CardExperience;