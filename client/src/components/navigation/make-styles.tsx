import {makeStyles, Theme} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => {
	return {
		menuNavigation: {
			fontSize: '40px',
			color: '#893F45B3',
			cursor: 'pointer',
			transform: 'translateY(-10px)',
			transition: 'color 0.3s',
			'&:hover': {
				color: '#c0636ab3',
			},
			[theme.breakpoints.down('sm')]: {
				fontSize: '40px',
			},
			[theme.breakpoints.down('xs')]: {
				fontSize: '32px',
			},
		}
	};
});

export default useStyles;