import css from './svg/skills/css.svg';
import figma from './svg/skills/figma.svg';
import git from './svg/skills/git.svg';
import html from './svg/skills/html.svg';
import javascript from './svg/skills/javascript.svg';
import materialui from './svg/skills/materialui.svg';
import react from './svg/skills/react.svg';
import typescript from './svg/skills/typescript.svg';

export const skillsData: string[] = [
	'Javascript',
	'Typescript',
	'React',
	//'Redux',
	'HTML',
	'CSS',
	'Material-UI',
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
		case 'react':
			return react
		case 'html':
			return html
		case 'css':
			return css
		case 'material-ui':
			return materialui
		case 'git':
			return git
		case 'figma':
			return figma
		default:
			break;
	}
}

