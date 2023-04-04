import React, {ReactElement} from 'react';
import { IoHomeSharp } from 'react-icons/io5';
import { HiDocumentText } from 'react-icons/hi';
import { FaUser} from 'react-icons/fa';
import { MdPhone } from 'react-icons/md';

export type TypeLink = {
	title: string,
	href: string,
	nodeIcon?: ReactElement
}

export const linksNavigData: TypeLink[] = [
	{
		title: 'Главная',
		href: '',
		nodeIcon: <IoHomeSharp />
	},
	{
		title: 'Обо мне',
		href: 'about',
		nodeIcon: <FaUser />
	},
	{
		title: 'Образование',
		href: 'education',
		nodeIcon: <HiDocumentText />
	},
	{
		title: 'Контакты',
		href: 'contacts',
		nodeIcon: <MdPhone />
	}
];