export type TypeJeneralInfo = {
	title: string,
	descriptionFirst: string,
	descriptionSecond: string,
	descriptionThird: string
}

export const jeneralInfoData: TypeJeneralInfo = {
	title: 'Немного обо мне',
	descriptionFirst: 'В настоящее время работаю и развиваюсь как web-разработчик. Практикую и совершенствую реализацию серверной части приложений на PHP. Ранее писал простые RESTful сервисы на Express.js. При этом использовал для работы с данными MySQL, SQLite, redis и mongoDB.',
	descriptionSecond: 'В процессе создания клиентской части приложений использую React+Redux/Redux-Toolkit и Angular в качестве технологической основы.',
	descriptionThird: 'Разрабатывал клиентскую сторону видеочата на базе WebRTC+WebSockets. Docker/docker-compose применял при локальной разработке и деплое. Также при создании проектов использовал Gulp, Webpack, Babel.'
}