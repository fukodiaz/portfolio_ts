import React, {FC, ReactElement} from 'react';
import Marquee from "react-fast-marquee";

import { skillsData, imageSkills } from '../../data/skillsData';
import styles from './skills.module.less';

const Skills: FC = () => {

	const createBoxSkill = (item: string, id: number): ReactElement => {
		return (
			<div className={styles.boxSkill} key={id}>
				<img  src={imageSkills(item)} alt='icon-skill'
						className={styles.imgSkill} />
				<h3 className={styles.titleSkill}>
					{item}
				</h3>
			</div>
		)
	} 

	return (
		<section id='skills' className={styles.boxSkills}>
			<p className={styles.wrapperHeaderSkills}>
				<h2 className={styles.headerSkills}>Навыки</h2>
			</p>

			<div className={styles.wrapperSkills}>
				<div className={styles.scrollSkills}>
					<Marquee gradient={false}  speed={70} pauseOnHover={true}
								pauseOnClick={true}  delay={0} play={true} >
						{skillsData?.map(createBoxSkill)}
					</Marquee>
				</div>
			</div>
		</section>
	);
}

export default Skills;