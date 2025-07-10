import {useTranslations} from 'next-intl';
import LanguageSwitcher from '../widgets/LanguageSwitcher';
import ThemeSwitcher from '../widgets/ThemeSwitcher';

export default function Header() {
    const navButtonsStyle = "text-sm font-medium hover:text-[var(--hover-text)] hover:bg-[var(--hover-background)] p-3 px-5 border-b-2 hover:border-b-[var(--accent-color)] border-transparent";
    const t = useTranslations('Navigation');

    return (
        <header className="w-full py-4 px-6 shadow-sm">
        <nav className='flex justify-between'>
            <ThemeSwitcher />
            <ul className="flex justify-center">
            <li>
                <button className={navButtonsStyle}>
                    {t('home')}
                </button>
            </li>
            <li>
                <button className={navButtonsStyle}>
                    {t('about')}
                </button>
            </li>
            <li>
                <button className={navButtonsStyle}>
                    {t('projects')}
                </button>
            </li>
            <li>
                <button className={navButtonsStyle}>
                    {t('contact')}
                </button>
            </li>
            </ul>
            <LanguageSwitcher/>
        </nav>
        </header>
    );
}