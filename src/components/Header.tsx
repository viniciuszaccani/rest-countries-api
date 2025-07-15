

import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';

function Header() {
    const [theme, setTheme] = useState(() => {

        return localStorage.getItem('theme') || 'dark';
    });

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <div className="flex p-3 h-full font-nunito w-full bg-surface-light text-text-light dark:bg-surface-dark  dark:text-text-dark  transition-colors duration-300">
            <div className="flex items-center justify-between w-full mx-auto max-w-10/12 sm:max-w-11/12 2xl:max-w-320">
                <h1 className="font-extrabold text-xl sm:text-2xl">Where in the world?</h1>
                <div>
                    <button className="flex gap-2 p-3 hover:bg-gray-400/40 rounded-sm cursor-pointer" onClick={toggleTheme}>
                        {theme === 'dark' ? <SunOutlined /> : <MoonOutlined />}
                        <h1>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</h1>
                    </button>
                </div>
            </div>
        </div>
    )
}


export default Header;