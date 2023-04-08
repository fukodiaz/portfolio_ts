import React, {useState, FC, ReactElement, ChangeEvent} from 'react'
import { Link } from 'react-router-dom'

import ItemProject from '../item-project'
import { projectsData, TypeProject } from '../../data/projectsData'
import { Grid } from '@material-ui/core'
import { AiOutlineHome } from "react-icons/ai";
import styles from './page-projects.module.less'

const PageProjects: FC = () => {
	const [search, setSearch] = useState('')

	const onSearch = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)
	const createItemProject = (data: TypeProject): ReactElement => {
		return <ItemProject {...data} />
	}
	const selectedProjects = projectsData?.filter((data) => {
		const dataChecked = `${data.title}${data.description}${data.elsStack.join('')}`
		return dataChecked.toLowerCase().includes(search.toLowerCase())
	})

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
								value={search} onChange={onSearch}
								placeholder='Найти проект...'/>
				</p>
				<div className={styles.contentPageProjects}>
					<Grid className={styles.innerBoxContentProjects} container direction='row'
							alignItems='center' justifyContent='center'>
						{
							selectedProjects?.map(createItemProject)
						}
					</Grid>
				</div>
			</div>
		</section>
	)
}

export default PageProjects