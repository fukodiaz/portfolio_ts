import React, {ReactElement} from 'react';
import { FiAtSign } from 'react-icons/fi';
import {
	FaGithub,
	FaTelegram
} from 'react-icons/fa';

export type TypeSocial = {
	label?: string,
	link: string,
	ariaLabel: string,
	nodeIcon: ReactElement
}

export const socialsData: TypeSocial[] = [
	{
		label: 'github',
		link: 'https://github.com/fukodiaz/',
		ariaLabel: 'GitHub',
		nodeIcon: <FaGithub />
	},
	{
		label: 'telegram',
		link: 'https://t.me/IlyaSept',
		ariaLabel: 'Telegram',
		nodeIcon: <FaTelegram />
	},
	{
		label: 'gmail',
		link: 'mailto:fukodiaz@gmail.com',
		ariaLabel: 'mail',
		nodeIcon: <FiAtSign />
	}
];