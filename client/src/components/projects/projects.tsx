import React, {FC, ReactElement} from 'react';

import ItemProject from '../item-project';
import { projectsData, TypeProject } from '../../data/projectsData';
import styles from './projects.module.less';

const Projects: FC = () => {
	const createItemProject = (data: TypeProject): ReactElement => {
		return <ItemProject {...data} />
	}
	return (
		<>
			{
				projectsData.length && (
					<section id='projects' className={styles.projects}>
						<div className={styles.boxHeaderProjects}>
							<h2 className={styles.headerProjects}>Проекты</h2>
						</div>
						<div className={styles.wrapperProjects}>
							<div className={styles.boxContentProjects}>
								{
									projectsData.slice(0, 3).map(createItemProject)
								}
							</div>
						</div>
					</section>
				)
			}
		</>
	)
}

export default Projects