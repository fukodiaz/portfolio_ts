import React, {FC, useState} from 'react';

import { IoMenuSharp, IoHomeSharp } from 'react-icons/io5';
import useStyles from './make-styles'; 
import styles from './navigation.module.less';

const Navigation: FC = () => {
	const [shown, setShown] = useState(false);
	const classes = useStyles();

	const onShow = ():void => setShown(true);
	const onClose = ():void => setShown(false);

	return (
		<nav className={styles.navigation}>
			<div className={styles.boxNavigation}>
				<h2 className={styles.blockAuthor}>Author</h2>
				<IoMenuSharp className={classes.menuNavigation} />
			</div>

			
		</nav>
	);
};

export default Navigation;