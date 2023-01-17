import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <section className="home px-20 ml-20 mt-5">
            <div className="icons  flex justify-between item-center">
                <div className="text-2xl text-pink-700 font-semibold">AnuSanya</div>
                <ul className="flex w-40 justify-between p-2 text-purple-500 text-xl ">
                    <li> 
                        <a href="https://linkedin.com/in/anuoluwapo-olusanya">
                           <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href='https://twitter.com/Madmoiselle_anu'><i className='fa-brands fa-twitter'></i></a>
                    </li>
                    <li>
                        <a href='https://github.com/Anu-022'>
                            <i className='fa-brands fa-github'></i>
                        </a>
                    </li>
                </ul>

            </div>
            <div className="flex">
                <div className="home-message basis-1/2  mt-20">
                    <h4 className="text-xl text-gray-700 font-bold mb-3">Hello, I'm a <span className="text-pink-500 "> Front-end Web Developer</span></h4>
                    <h1 className="text-6xl text-gray-800 font-bold mb-4">Anuoluwapo 
                        <br/>Olusanya
                    </h1>
                    <p className="mb-4 text-gray-800">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                    <Link to='/contact'>
                       <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-4 rounded-full shadow-lg shadow-purple-500/50">Hire me</button>
                    </Link>
                </div>
                <div className="home-img  basis-1/2">
                    <div className=" ml-40 rounded-tr-lg rounded-l-full rounded-br-full mt-20 h-80 w-80 bg-gradient-to-r from-purple-500 to-pink-500 relative"> 
                        <img src="https://res.cloudinary.com/dz5fsjeb4/image/upload/v1673808230/image0-removebg-preview_vioinj.png" alt="Anu's-Image" style= {{width: '250px', border:'0'}}  className='absolute top-0 left-px'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;