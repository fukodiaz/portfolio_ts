import React, {FC} from 'react'
import { Link } from 'react-router-dom'

import ItemProject from '../item-project'
import { projectsData, TypeProject } from '../../data/projectsData'
import { AiOutlineHome } from "react-icons/ai";
import styles from './page-projects.module.less'

const PageProjects: FC = () => {

	return (
		<section className={styles.pageProjects}>
			<div className={styles.boxHeaderPageProjects}>
				<Link to='/' className={styles.linkHome}>
					<AiOutlineHome className={styles.iconLinkHome} />
				</Link>
				<h1 className={styles.headerPageProjects}>Проекты</h1>
			</div>

			<div className={styles.boxContentPageProjects}>
				<p className={styles.boxSearchProjects}>
					<input   type='text' className={styles.inputSearchProject}
								placeholder='Найти проект...'/>
				</p>
				<div className={styles.contentPageProjects}>
					
				</div>
			</div>
		</section>
	)
}

export default PageProjects