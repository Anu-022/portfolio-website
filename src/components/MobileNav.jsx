import { useState } from "react";
import { Link } from "react-router-dom";

const MobileNav = () => {
    
    const [clicked, setClicked] = useState(false);
    
    function toggleMenu(e) {
     setClicked(!clicked);
    }
    return (
        <div className="mobile-nav lg:hidden">
            <nav className=" px-5 bg-slate-50 flex justify-between items-center h-[80px] w-screen lg:hidden fixed top-0 left-0">
            <div className="text-2xl lg:text-2xl text-pink-700 font-semibold">
                    AnuSanya
                </div>
                <div className="text-2xl pr-5 text-pink-700">
                   <button onClick= {toggleMenu}>
                      <i className={clicked ? 'fas fa-xmark': 'fas fa-bars'}></i>
                   </button>
                </div >
            </nav>
            {clicked && 
            <div className="fixed h-screen w-[300px] top-[80px] right-0 bg-slate-50">
            <ul className='  text-purple-500 text-2xl flex flex-col items-center'>
                <li className='mt-5'>
                    <Link to="/">
                        <i className='fa-solid fa-house pr-4'></i>
                        <span>Home</span>
                    </Link>   
                </li>
                <li className='mt-10'>
                    <Link to="/about">
                        <i className='fa-solid fa-user pr-4 '></i>
                        <span>About</span>
                    </Link>
                    
                </li>
                <li className='mt-10'>
                    <Link to="/projects">
                        <i className='fa-solid fa-suitcase pr-4'></i>
                        <span>Projects</span>
                    </Link>    
                </li>
                <li className='mt-10 '>
                    <Link to="/contact">
                        <i className='fa-solid fa-address-book pr-4'></i>
                        <span>Contact</span>
                    </Link>
                </li>
                <li className='mt-28'>
                <a href="mailto:ilorianuoluwapo@gmail.com?subject=I'd Like to Work with You" target='_blank'>
                   <i className='fa-solid fa-envelope pr-4'></i>
                   <span>Send Email</span>
                </a>
              </li>      
            </ul>
            </div>
}
        </div>
        
    )
}

export default MobileNav;