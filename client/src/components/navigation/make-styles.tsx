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
		},
		MuiDrawer: {
			padding: '0 43px',
			width: '336px',
			fontFamily: 'Inter',
			fontStyle: 'normal',
			fontSize: '24px',
			background: '#893F45B3',
			overflow: 'hidden',
			borderTopRightRadius: '40px',
			borderBottomRightRadius: '40px',
			[theme.breakpoints.down('sm')]: {
				width: '288px',
			},
		},
		btnClose: {
			position: 'absolute',
			right: 40,
			top: 40,
			fontSize: '32px',
			cursor: 'pointer',
			color: '#eaeaea',
			transition: 'color 0.2s',
			'&:hover': {
				color: 'rgb(230, 201, 201)',
			},
			'&:focus': {
				outline: 'none'
			},
			[theme.breakpoints.down('sm')]: {
				right: 20,
				top: 20,
			},
		},
		itemDrawer: {
			display: 'flex',
			justifyContent: 'space-evenly',
			alignItems: 'center',
			//margin: '32px auto',
			boxSizing: 'border-box',
			padding: '0 15px',
			color: '#eaeaea',
			width: '258px',
			height: '60px',
			border: '2px solid #eaeaea',
			borderRadius: '79px',
			background: '#893F45B3',
			transition: 'background-color 0.2s, color 0.2s',
			'&:hover': {
				background: '#be5c64b3',
				color: '#ecddc5',
			},
			[theme.breakpoints.down('sm')]: {
				padding: '0 25px',
				width: '100%',
				height: '55px',
			}
		},
		iconDrawer: {
			fontSize: '26px',
            [theme.breakpoints.down('sm')]: {
               fontSize: '23px',
            },
		},
		textLinkDrawer: {
			fontFamily: 'Inter',
			fontSize: '21px',
			width: '50%',
			[theme.breakpoints.down('sm')]: {
				fontSize: '18px',
			},
		}
	};
});

export default useStyles;