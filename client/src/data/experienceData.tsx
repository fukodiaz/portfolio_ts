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
		organization: 'Экосистема Альфа',
		specialization: 'Frontend-разработчик',
		startYear: '2022',
		startMonth: 'Август',
		endYear: '2023',
		endMonth: 'Апрель'
	},
	{
		id: 2,
		organization: 'Самообучение',
		specialization: 'Frontend-разработчик',
		startYear: '2021',
		startMonth: 'Июнь',
		endYear: '2022',
		endMonth: 'Август'
	},
]