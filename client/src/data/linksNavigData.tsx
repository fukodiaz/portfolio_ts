import React, {ReactElement} from 'react';
import { IoHomeSharp, IoBriefcase } from 'react-icons/io5';
import { HiDocumentText, HiAcademicCap, HiCollection } from 'react-icons/hi';
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
		title: 'Навыки',
		href: 'skills',
		nodeIcon: <HiAcademicCap />
	},
	{
		title: 'Опыт',
		href: 'experience',
		nodeIcon: <IoBriefcase />
	},
	{
		title: 'Проекты',
		href: 'projects',
		nodeIcon: <HiCollection />
	},
	{
		title: 'Контакты',
		href: 'contacts',
		nodeIcon: <MdPhone />
	}
];