import bel_go from './png/bel_go.png'
import admin from './png/admin.png'

export type TypeProject = {
	id: number | string,
	title: string,
	description?: string,
	elsStack?: string[],
	code: string,
	deploy?: string,
	image: string
}

export const projectsData: TypeProject[] = [
	{
		id: 1,
		title: 'BEL_go',
		description: 'Личный учебный проект приложения, предусматривающего возможность аренды жилья из предложенных вариантов в одном из четырех городов Бельгии',
		elsStack: ['React', 'Redux', 'Less'],
		code: 'https://github.com/fukodiaz/BEL_go',
		deploy: 'https://bel-go.vercel.app/',
		image: bel_go
	},
	{
		id: 2,
		title: 'Admin_account',
		description: 'Учебный проект, подразумевающий создание личного кабинета администратора системы',
		elsStack: ['React', 'Redux', 'Less', 'Node.js', 'Redis'],
		code: 'https://github.com/fukodiaz/admin_account',
		deploy: 'https://admin-account.vercel.app/',
		image: admin
	}
]