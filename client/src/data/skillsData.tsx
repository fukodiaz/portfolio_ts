import css from './svg/skills/css.svg';
import figma from './svg/skills/figma.svg';
import git from './svg/skills/git.svg';
import html from './svg/skills/html.svg';
import javascript from './svg/skills/javascript.svg';
import angular from './svg/skills/angular.svg';
import react from './svg/skills/react.svg';
import typescript from './svg/skills/typescript.svg';

export const skillsData: string[] = [
	'Javascript',
	'Typescript',
	'Angular',
	'React',
	//'Redux',
	'HTML',
	'CSS',
	'Git',
	'Figma'
]

export const imageSkills = (skill: string): string => {
	const nameSkill = skill.toLowerCase();
	switch(nameSkill) {
		case 'javascript':
			return javascript
		case 'typescript':
			return typescript
		case 'angular':
			return angular
		case 'react':
			return react
		case 'html':
			return html
		case 'css':
			return css
		case 'git':
			return git
		case 'figma':
			return figma
		default:
			break;
	}
}

