
import { Switch } from "antd";
import { MoonOutlined, SunOutlined } from '@ant-design/icons';

function Header() {
    return (
        <div className='flex bg-surface-dark p-5 h-full text-text-dark font-nunito w-full '>
            <div className="flex items-center justify-between w-full mx-auto max-w-10/12 sm:max-w-11/12 2xl:max-w-320">
                <h1 className="font-extrabold text-xl sm:text-2xl">Where in the world?</h1>
                <h1>dark mode</h1>
            </div>
        </div>
    )
}


export default Header;