import {Link} from 'react-router-dom';
import AnusImage from './asset/portfolio-image.png'

const Home = () => {
    return (
        <section className="home px-20 ml-20 mt-5">
            <div className="icons  flex justify-between item-center">
                <div className="text-2xl text-pink-700 font-semibold">
                    AnuSanya
                </div>
                <ul className="flex w-40 justify-between p-2 text-purple-500 text-xl ">
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
            <div className="flex items-space-between">
                <div className="home-message basis-1/2  mt-20">
                    <h4 className="text-xl text-gray-700 font-bold mb-3">Hello, I'm a <span className="text-pink-500 "> Front-end Web Developer</span></h4>
                    <h1 className="text-6xl text-gray-800 font-bold mb-4">Anuoluwapo 
                        <br/>Olusanya
                    </h1>
                    <p className="mb-4 text-gray-800">My name is Anuoluwapo Olusanya. I'm a front-end developer based in lagos, Nigeria who is  focused on building rich and interactive user experiences using modern front-end web technologies. I'm currently available for job opportunites, so if you are a business owner seeking a freelance web developer or an employer seeking your next hire, hit the button below to get in touch.</p>
                    <Link to='/contact'>
                       <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-14 py-4 rounded-full shadow-lg shadow-purple-500/50">Hire me</button>
                    </Link>
                </div>
                <div className="home-img  basis-1/2">
                        <img src={AnusImage} alt="Anu's-Image" style= {{width: '500px'}} />
                </div>
            </div>
        </section>
    )
}

export default Home;