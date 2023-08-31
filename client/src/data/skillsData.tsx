import php from './svg/skills/php.svg';
import docker from './svg/skills/docker.svg';
import mongodb from './svg/skills/mongoDB.svg';
import mysql from './svg/skills/mysql.svg';
import sqlite from './svg/skills/sqlite.svg';
import css from './svg/skills/css.svg';
import figma from './svg/skills/figma.svg';
import git from './svg/skills/git.svg';
import html from './svg/skills/html.svg';
import javascript from './svg/skills/javascript.svg';
import angular from './svg/skills/angular.svg';
import react from './svg/skills/react.svg';
import typescript from './svg/skills/typescript.svg';

export const skillsData: string[] = [
	'PHP',
	'MySQL',
	'SQLite',
	'mongoDB',
	'Javascript',
	'Typescript',
	'Angular',
	'React',
	//'Redux',
	'HTML',
	'CSS',
	'Docker',
	'Git',
	'Figma'
]

export const imageSkills = (skill: string): string => {
	const nameSkill = skill.toLowerCase();
	switch(nameSkill) {
		case 'php':
			return php
		case 'mysql':
			return mysql
		case 'sqlite':
			return sqlite
		case 'mongodb':
			return mongodb
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
		case 'docker':
			return docker
		case 'git':
			return git
		case 'figma':
			return figma
		default:
			break;
	}
}

