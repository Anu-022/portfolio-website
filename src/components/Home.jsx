import {Link} from 'react-router-dom';
import AnusImage from './asset/portfolio-image.png'

const Home = () => {
   
    return (
        <section className="home px-5 lg:px-20 lg:ml-20 mt-5">
            <div className="icons h-[50px] flex justify-between item-center ">
                <div className="hidden lg:block text-xl lg:text-2xl text-pink-700 font-semibold">
                    AnuSanya
                </div>
                
                <ul className=" hidden lg:flex w-40 justify-between p-2 text-purple-500 text-xl ">
                    <li> 
                        <a href="https://linkedin.com/in/anuoluwapo-olusanya" target= "_blank">
                           <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href='https://twitter.com/Madmoiselle_anu' target= "_blank"><i className='fa-brands fa-twitter'></i></a>
                    </li>
                    <li>
                        <a href='https://github.com/Anu-022'>
                            <i className='fa-brands fa-github' target= "_blank"></i>
                        </a>
                    </li>
                </ul>

            </div>
            <div className="lg:flex lg:items-space-between">
                <div className="home-message lg: basis-1/2 mt-20">
                    <h4 className="text-xl text-gray-700 font-bold mb-3">Hello, I'm a <span className="text-pink-500 "> Front-end Web Developer</span></h4>
                    <h1 className=" text-4xl lg:text-6xl text-gray-800 font-bold mb-4">Anuoluwapo 
                        <br/>Olusanya
                    </h1>
                    <p className="mb-4 text-gray-800">My name is Anuoluwapo Olusanya. I'm a front-end developer based in lagos, Nigeria who is  focused on building rich and interactive user experiences using modern front-end web technologies. I'm currently available for job opportunites, so if you are a business owner seeking a freelance web developer or an employer seeking your next hire, hit the button below to get in touch.</p>
                    <Link to='/contact' className='hidden lg:block'>
                       <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-14 py-4 mt-6 rounded-full shadow-lg shadow-purple-500/50">Hire me</button>
                    </Link>
                </div>
                <div className="home-img  lg:basis-1/2 mx-auto w-[300px] lg:w-[500px]">
                        <img src={AnusImage} alt="Anu's-Image" className='object-cover' />
                </div>
                <Link to='/about' className=' lg:hidden'>
                       <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 block mx-auto mb-14 rounded-full shadow-lg shadow-purple-500/50">Learn More</button>
                </Link>
            </div>
        </section>
    )
}

export default Home;