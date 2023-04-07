import React, {FC, ReactElement} from 'react'
const Fade = require("react-reveal/Fade");

import { TypeProject } from '../../data/projectsData';
import { FaPlay, FaCode } from 'react-icons/fa';
import styles from './item-project.module.less'

const ItemProject: FC<TypeProject> = (props) => {
	const {id, title, description, elsStack, code, deploy, image} = props;

	const createElStack = (nameEl: string, id: number):ReactElement => (
		<li key={id} className={styles.elStack}>
			{nameEl}
		</li>
	)

	return (
		<Fade bottom>
			<div key={id} className={styles.itemProject}>
				<div className={styles.contentProject}>
					<h3 className={styles.headingProject}>
						{title}
					</h3>
					<img  src={image ? image : ''} alt={title}
							className={styles.imgProject} />
					<div className={styles.boxLinksProject}>
						<a href={deploy} target='_blank' rel='noreferrer'
							className={styles.linkProject}>
							<FaPlay className={styles.iconLinkProject} />
						</a>
						<a href={code} target='_blank' rel='noreferrer'
							className={styles.linkProject}>
							<FaCode className={styles.iconLinkProject} />
						</a>
					</div>
				</div>
				<p className={styles.descriptionProject}>
					{description}
				</p>
				<ul className={styles.listElsStack}>
					{
						elsStack?.map(createElStack)
					}
				</ul>
			</div>
		</Fade>
	)
} 

export default ItemProject