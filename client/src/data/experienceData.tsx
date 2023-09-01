export interface ExperienceData {
	id: number,
	organization?: string,
	specialization: string,
	startYear: string,
	startMonth: string,
	endYear?: string,
	endMonth?: string
}	

export const experienceData: ExperienceData[] = [
	{
		id: 1,
		organization: 'Самообучение',
		specialization: 'Разработка web-сервисов на PHP',
		startYear: '2023',
		startMonth: 'Март',
		endYear: '2023',
		endMonth: 'Сентябрь'
	},
	{
		id: 2,
		organization: 'Экосистема Альфа',
		specialization: 'Стажировка (frontend-разработчик)',
		startYear: '2022',
		startMonth: 'Август',
		endYear: '2023',
		endMonth: 'Март'
	},
	{
		id: 3,
		organization: 'Самообучение',
		specialization: 'Frontend-разработчик',
		startYear: '2021',
		startMonth: 'Июнь',
		endYear: '2022',
		endMonth: 'Август'
	},
]