import React, {FC} from 'react';

import './error-indicator.css';
import src from './error.png';

const ErrorIndicator:FC = () => {
	return (
		<div className='error-indicator'>
			<img src={src} alt='image of error' />
			<span className='error'>ERROR!</span>
			<span>
				something has gone wrong
			</span>
		</div>
	);
};

export default ErrorIndicator;