interface PrimaryData {
	name: string,
	title: string,
	descriptionFirst: string,
	descriptionSecond: string,
	descriptionThird?: string,
	descriptionFourth?: string,
	image?: string
}

export const primaryData: PrimaryData = {
	name: 'Илья Степаненко',
	title: 'Web-разработчик',
	descriptionFirst: 'Frontend-часть создаю на основе React+Redux, а также на Angular.',
	descriptionSecond: 'Backend пишу на PHP 7-8. Из фреймворков PHP на данный момент использую только Slim 4.',
	descriptionThird: 'Работал с такими базами данных, СУБД, как MySQL, SQLite, redis и mongoDB.',
	image: './Antwerp_1.jpg'
}