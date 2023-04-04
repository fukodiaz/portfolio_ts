import React, {FC, useState, cloneElement, KeyboardEvent, ReactElement} from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';

import {TypeLink, linksNavigData} from '../../data/linksNavigData';
const Fade = require("react-reveal/Fade");
import Drawer from '@material-ui/core/Drawer';
import CloseIcon from '@material-ui/icons/Close';
import { IoMenuSharp } from 'react-icons/io5';
import useStyles from './make-styles'; 
import styles from './navigation.module.less';

const Navigation: FC = () => {
	const [shown, setShown] = useState(false);
	const classes = useStyles();

	const onShow = ():void => setShown(true);
	const onClose = ():void => setShown(false);
	// const onKeyDown = (e: KeyboardEvent<SVGSVGElement>):void => {
	// 	if (e.key === '' || e.key === 'Enter') {
	// 		e.preventDefault();
	// 		setShown(false);
	// 	}
	// };
	const onCloseDrawer = (e: any, reason: any): void => {
		if (reason !== 'backdropClick') {
			onClose();
		} else if (reason !== 'escapeKeyDown') {
			onClose();
		}
	};

	const createLinkItem = ({title, href, nodeIcon}:TypeLink):ReactElement => {
		return (
			<li key={title} className={styles.itemLinkNavig}>
				<Fade left>
					<NavLink to={`/#${href}`} smooth={true}
								className={styles.linkNavig}>
						<div className={classes.itemDrawer}>
							{ nodeIcon && cloneElement(nodeIcon, {className: classes.iconDrawer}) }
							<span className={classes.textLinkDrawer}>{title}</span>
						</div>
					</NavLink>
				</Fade>
			</li>
		);
	}

	return (
		<nav className={styles.navigation}>
			<div className={styles.boxNavigation}>
				<h2 className={styles.blockAuthor}>Author</h2>
				<IoMenuSharp className={classes.menuNavigation} aria-label='Menu'
									onClick={onShow} />
			</div>

			<Drawer variant='temporary' anchor='left' className={styles.drawer}
						open={shown} classes={{paper: classes.MuiDrawer}}
						onClose={onCloseDrawer} disableScrollLock={true}>
				<div className={styles.boxCloseBtn}>
					<CloseIcon onClick={onClose} 
									//onKeyDown={onKeyDown}
									className={classes.btnClose} role='button'
									tabIndex={0} aria-label='Close' />
				</div>
				<br />
				<div className={styles.boxNavigLinks} onClick={onClose}>
					<ul className={styles.listNavigLinks}>
						{
							linksNavigData?.map(createLinkItem)
						}
					</ul>
				</div>
			</Drawer>
		</nav>
	);
};

export default Navigation;