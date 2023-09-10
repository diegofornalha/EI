import type { BaseTranslation } from '../i18n-types';
import { ExpertiseEnum } from '../../lib/types/content/metadata/expertise.enum';

const ru: BaseTranslation = {
	// Home / HeroSection
	MAIN_HEADING_1: 'Узнайте все о',
	MAIN_HEADING_2: 'Flow Blockchain',
	WELCOME: 'Добро пожаловать',

	// Home / ExploreSection
	EXPLORE_TAGLINE: 'Изучайте наш контент',
	EXPLORE_H1: 'Бесплатные образовательные ресурсы Flow',

	// Home / LearningPathsSection
	PATHS_H1: 'Следуйте одному из наших путей обучения',

	// Home / SocialMediaSection
	SOCIAL_H1: 'Более 1000 студентов рекомендуют нас',

	// Catalog / Sidebar
	TYPE_OF_CONTENT: 'Тип контента',
	SUBJECT: 'Тема',
	EXPERTISE: 'Уровень',

	// Cadence by example
	// Title(H1): 'Cadence на примере'
	SEARCH: 'Поиск',
	NO_EXAMPLES_FOUND: 'Примеры не найдены для этого языка',

	// Your achievements
	ACHIEVEMENTS_H1: 'Ваши достижения',

	// ContentCard
	SKILLS_YOU_WILL_LEARN: 'Навыки, которые вы изучите',

	START: 'Начать',
	CATALOG: 'Каталог',
	SNIPPETS: 'Snippets',
	LEARN: 'Изучить',
	NEW_TO: 'новичок в',
	START_HERE: 'Начни здесь',

	// Expertise
	[ExpertiseEnum.Advanced]: 'Продвинутый',
	[ExpertiseEnum.Intermediate]: 'Средний',
	[ExpertiseEnum.Beginner]: 'Начальный',

	// Quickstarts
	NO_QUICKSTARTS_FOUND: 'Шаблоны не найдены для этого языка'
};

export default ru;
