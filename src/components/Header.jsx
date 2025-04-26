import { MdWbSunny } from "react-icons/md";
import { useTheme } from "../contexts/ThemeContext";
import { IoMdMoon } from "react-icons/io";

export default function Header() { 
    const theme = useTheme();

    return (
        <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Mini E-Commerce Product Listing Page</h1>
            <button onClick={()=>theme?.toggleDarkMode()}>
            {theme?.darkMode ? <MdWbSunny className="w-5 h-5" /> : <IoMdMoon className="w-5 h-5" />}
            </button>
        </div>
    )
}