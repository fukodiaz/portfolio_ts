import React, {ReactElement} from 'react'
import { FiAtSign } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import {
	FaTelegram,
	FaGithub
} from 'react-icons/fa'

export type TypeContacts = {
	label: string,
	link: string,
	content: string,
	nodeIcon: ReactElement
}

export const contactsData: TypeContacts[] = [
	{
		label: 'gmail',
		link: 'mailto:fukodiaz@gmail.com',
		content: 'fukodiaz@gmail.com',
		nodeIcon: <FiAtSign />
	},
	{
		label: 'telegram',
		link: 'https://t.me/IlyaSept',
		content: 't.me/IlyaSept',
		nodeIcon: <FaTelegram />
	},
	{
		label: 'github',
		link: 'https://github.com/fukodiaz/',
		content: 'https://github.com/fukodiaz/',
		nodeIcon: <FaGithub />
	},
	{
		label: 'address',
		link: '#',
		content: 'РФ, г. Новосибирск - 630061',
		nodeIcon: <HiOutlineLocationMarker />
	},
]