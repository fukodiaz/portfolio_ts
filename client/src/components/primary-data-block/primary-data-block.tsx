import React, {FC, cloneElement, ReactElement} from 'react';

import { Button } from '@material-ui/core';
import { NavHashLink as NavLink } from 'react-router-hash-link';

import { socialsData, TypeSocial } from '../../data/socialsData';
import { primaryData } from '../../data/primaryData';

import useStyles from './make-styles'; // вынесенная в отдельный модуль стилизация кнопок 
import styles from './primary-data-block.module.less';
import resume from './resume.pdf';
import photo from './Antwerp_1.jpg';

const PrimaryDataBlock:FC = () => {

	const classes = useStyles();
	const createSocialLink = ({link, label, nodeIcon, ariaLabel}: TypeSocial): ReactElement => {
		return (
			<li key={label}>
				<a href={link} target='_blank' rel='noreferrer'
					className={styles.socialLink}>
					{
						cloneElement(nodeIcon, {
							className: styles.iconLinkSocial,
							['aria-label']:ariaLabel})
					}
				</a>
			</li>
		);
	};

	return (
		<section className={styles.boxPrimaryData}>
			<div className={styles.innerBoxPrimaryData}>
				<div className={styles.firstContainerPrimaryData}>
					<ul className={styles.listSocialLinks}>
						{
							socialsData?.map(createSocialLink)
						}
					</ul>
				</div>
				{
					photo && (
						<img src={photo} alt='my_photo' 
								className={styles.personalPhoto} />
					)
				}
				<div className={styles.secondContainerPrimaryData}>
					<div className={styles.blockPersonalData}>
						<h2 className={styles.primaryTitle}>{primaryData.title}</h2>
						<h2 className={styles.primaryName}>{primaryData.name}</h2>
						<p className={styles.primaryDescription}>{primaryData.description}</p>

						<div className={styles.boxPrimaryBtns}>
							{
								resume && (
									<a href={resume} download='resume' target='_blank' rel='noreferrer'>
										<Button className={classes.btnResume}>
											Резюме
										</Button>
									</a>
								)
							}
							<NavLink to='#' smooth={true}>
								<Button className={classes.btnContacts}>
									Контакты
								</Button>
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PrimaryDataBlock;