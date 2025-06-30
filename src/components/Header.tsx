
import { Switch } from "antd";
import { MoonOutlined, SunOutlined } from '@ant-design/icons';

function Header() {
    return (
        <div className='flex bg-surface-dark p-5 h-full items-center justify-between text-text-dark font-nunito'>
            <h1 className="font-extrabold text-xl sm:text-2xl">Where in the world?</h1>
            <h1>dark mode</h1>
        </div>
    )
}


export default Header;