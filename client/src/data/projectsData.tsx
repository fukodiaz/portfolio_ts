import bel_go from './png/bel_go.png'
import admin from './png/admin.png'
import tasks from './png/tasks.png'
import recipes from './png/recipes.png'
import table from './png/table.png'
import sedona from './png/sedona.png'
import velo from './png/velo.png'

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
		title: 'BEL-go',
		description: 'Личный учебный проект, предусматривающего возможность аренды жилья в одном из четырех городов Бельгии',
		elsStack: ['React', 'Redux', 'Less', 'Laravel 10', 'MySQL'],
		code: 'https://github.com/fukodiaz/BEL_go',
		deploy: 'https://bel-go.vercel.app/',
		image: bel_go
	},
	{
		id: 2,
		title: 'VELO SHOP',
		description: 'Учебный проект, предполагавший создание интернет-магазина на bitrix',
		elsStack: ['Bitrix', 'jQuery', 'Bootstrap'],
		code: 'https://github.com/fukodiaz/velo-bitrix',
		// deploy: 'https://bel-go.vercel.app/',
		image: velo
	},
	{
		id: 3,
		title: 'Admin-account',
		description: 'Учебный проект, подразумевающий создание личного кабинета администратора системы',
		elsStack: ['React', 'Redux', 'Less', 'Node.js', 'Redis'],
		code: 'https://github.com/fukodiaz/admin_account',
		deploy: 'https://admin-account.vercel.app/',
		image: admin
	},
	{
		id: 4,
		title: 'Tasks',
		description: 'Приложение, позволяющее создавать, редактировать, распределять задачи в рамках определенных проектов',
		elsStack: ['React', 'Redux', 'SCSS'],
		code: 'https://github.com/fukodiaz/tasks_test',
		deploy: 'https://fukodiaz.github.io/tasks_test/',
		image: tasks
	},
	{
		id: 5,
		title: 'Recipe Book',
		description: 'Приложение, позволяющее осуществлять некоторые опции (редактирование, добавление и т.д.) со списком рецептов и ингредиентов',
		elsStack: ['Angular', 'Firebase', 'Bootstrap 3'],
		code: 'https://github.com/fukodiaz/recipe-book',
		deploy: 'https://recipe-book-cyan.vercel.app/',
		image: recipes
	},
	{
		id: 6,
		title: 'Table',
		description: 'Выполненное мною тестовое задание, предполагавшее создание таблицы, отображающей данные пользователей',
		elsStack: ['React', 'Redux', 'Less'],
		code: 'https://github.com/fukodiaz/table_test',
		deploy: 'https://table-test-psi.vercel.app/',
		image: table
	},
	{
		id: 7,
		title: 'Sedona',
		description: 'Cтатический сайт "Sedona" на основе макетов HTML Academy',
		elsStack: ['Less', 'JavaScript'],
		code: 'https://github.com/fukodiaz/Sedona-3version',
		deploy: 'https://fukodiaz.github.io/Sedona-3version/',
		image: sedona
	}
]