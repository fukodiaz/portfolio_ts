import React, {FC} from 'react';

import imgExperience from './imgExperience.svg';
import styles from './experience.module.less';

const Experience: FC = () =>  {

	return (
		<section id='experience' className={styles.wrapperExperience}>
			<div className={styles.innerBoxExperience}>
				<div className={styles.boxImgExperience}>
					<img  src={imgExperience} alt='picture_experience'
							className={styles.imgExperience} />
				</div>
				<div className={styles.boxDescrExperience}>
					<h2 className={styles.headerExperience}>Опыт</h2>
				</div>
			</div>
		</section>
	)
};

export default Experience;