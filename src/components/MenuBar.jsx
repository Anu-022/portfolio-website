import { Link } from "react-router-dom";
const MenuBar = () => {
    return (
        <aside style= {{height: '100vh'}}  className="menu-bar border-4 border-pink-300 px-6 fixed top-0 left-0">
            <ul className='mt-20 text-purple-500 text-2xl flex flex-col items-center'>
                <li className='mt-5'>
                    <Link to="/">
                        <i className='fa-solid fa-house'></i>
                    </Link>
                    
                </li>
                <li className='mt-10'>
                    <Link to="/about">
                        <i className='fa-solid fa-user '></i>
                    </Link>
                    
                </li>
                <li className='mt-10'>
                    <Link to="/projects">
                        <i className='fa-solid fa-suitcase'></i>
                    </Link>    
                </li>
                <li className='mt-10'>
                    <Link to="/contact">
                        <i className='fa-solid fa-address-book '></i>
                    </Link>
                </li>
                <li className='mt-28'>
                <a href="mailto:ilorianuoluwapo@gmail.com?subject=I'd Like to Work with You" target='_blank'>
                   <i className='fa-solid fa-envelope '></i>
                </a>
                
                </li>
                  
            </ul>
            
                
            
        </aside>
    )
}
export default MenuBar;
