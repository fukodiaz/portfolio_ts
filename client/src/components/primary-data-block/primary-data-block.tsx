import React, {FC, cloneElement, ReactElement} from 'react';

import { socialsData, TypeSocial } from '../../data/socialsData';

import styles from './primary-data-block.module.less';

const PrimaryDataBlock:FC = () => {

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
				<div className={styles.secondContainerPrimaryData}>
					gh
				</div>
			</div>
		</section>
	);
};

export default PrimaryDataBlock;