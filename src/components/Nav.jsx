import tv from "../assets/icons/tv.svg";
import menu from "../assets/icons/nav_menu.svg";
import search from "../assets/icons/search.svg";

const Nav = () => {
    return ( 
        <div className="absolute z-10 flex items-center justify-between w-full px-16 py-3 top-2 ">
            <div id="first" className="flex items-center text-2xl font-bold text-white gap-x-4">
                <img src={tv} alt="Logo" className="inline"/> MovieBox 
            </div>

            <div id="search" className="relative flex items-center max-w-lg w-100 grow">
                <input type="text" className="px-3 placeholder-white bg-transparent border-2 border-white rounded-md h-9 grow" placeholder="What do you want to watch?"/>
                <button className="absolute right-4"><img src={search} alt="Search bar" /></button>
            </div>

            <div id="last" className="flex items-center font-bold text-white text-md gap-x-4">
                Sign In <img src={menu} alt="Menu button" className="cursor-pointer"/>
            </div>
        </div>
     );
}
 
export default Nav;

