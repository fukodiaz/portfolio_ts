interface PrimaryData {
	name: string,
	title: string,
	descriptionFirst: string,
	descriptionSecond: string,
	image?: string
}

export const primaryData: PrimaryData = {
	name: 'Илья Степаненко',
	title: 'Frontend разработчик',
	descriptionFirst: 'Создаю web-приложения на основе Angular и React+Redux',
	descriptionSecond: 'Пишу небольшие RESTful-приложения с помощью Expess.js',
	image: './Antwerp_1.jpg'
}