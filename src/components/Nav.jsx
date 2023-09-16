/* eslint-disable react/prop-types */
import tv from "../assets/icons/tv.svg";
import menu from "../assets/icons/nav_menu.svg";
import search from "../assets/icons/search.svg";

const Nav = ({isVisible, setSearchKey, searchMovies}) => {
      // Using Tailwind CSS classes to control visibility
        const logoClass = isVisible ? "text-black" : "text-white";
        const borderClass = isVisible ? "border-black" : "border-white";
    
    return ( 
        <div className="absolute z-10 flex items-center justify-between w-full px-16 py-3 top-2 ">
            <div id="first" className={`flex items-center text-2xl font-bold gap-x-4 ${logoClass}` }>
                <img src={tv} alt="Logo" className="inline pr-6 md:pr-0"/> <span className="hidden md:flex">MovieBox </span>
            </div>

            <div id="search" className="relative flex items-center max-w-lg w-100 grow">
                <form onSubmit={searchMovies} className="flex items-center max-w-lg w-100 grow">
                <input type="text" onChange={(e) => setSearchKey(e.target.value)} className={`px-3 placeholder-white bg-transparent border-2 ${borderClass} rounded-md h-9 grow text-xs`} placeholder="What do you want to watch?"/>
                <button type="submit" className="absolute right-4"><img src={search} alt="Search bar" /></button>
                </form>
            </div>
    
            <div id="last" className={`flex items-center font-bold ${logoClass} text-md gap-x-4`}>
                <span className="hidden md:flex">Sign In</span> <img src={menu} alt="Menu button" className="pl-6 cursor-pointer md:pl-0"/>
            </div>
        </div>
     );
}
 
export default Nav;

