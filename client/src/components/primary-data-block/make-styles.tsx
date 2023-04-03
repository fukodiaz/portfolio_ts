import {makeStyles, Theme} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => {
	return {
		btnResume: {
			color: '#893F45B3',
			borderRadius: '30px',
			textTransform: 'inherit',
			textDecoration: 'none',
			width: '150px',
			fontSize: '16px',
			height: '50px',
			border: `3px solid #893F45B3`,
			transition: '100ms ease-out',
			'&:hover': {
				backgroundColor: '#893F45B3',
				color: '#eaeaea',
				border: `3px solid #893F45B3`,
			},
			[theme.breakpoints.down('sm')]: {
				width: '180px',
			},
		},
		btnContacts: {
			backgroundColor: '#893F45B3',
			color: '#212121',
			borderRadius: '30px',
			textTransform: 'inherit',
			textDecoration: 'none',
			width: '150px',
			height: '50px',
			fontSize: '16px',
			border: `3px solid #893f45e6`,
			transition: '100ms ease-out',
			'&:hover': {
				backgroundColor:'#212121',
				color: '#eaeaea',
				border: `3px solid #eaeaea`,
			},
			[theme.breakpoints.down('sm')]: {
				display: 'none',
			}
		}
	}
});

export default useStyles;