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
	descriptionFirst: 'Мой основной стек - PHP/JS/MySQL. Разрабатываю сайты на CMS (Bitrix, WordPress). Из фреймворков работаю с Laravel, также есть небольшой опыт с Yii, Yii2.',
	descriptionSecond: 'В части фронтенда использую jQuery. Есть хорошая практика с React, изучал  Angular.',
	descriptionThird: 'Работал с такими базами данных, СУБД, как MySQL, SQLite, redis и mongoDB.',
	image: './Antwerp_1.jpg'
}