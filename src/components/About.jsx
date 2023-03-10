import {Link} from 'react-router-dom'
import ReadMore from './ReadMore'; 
const About = () => {
    return (
        <section className="about ml-20 ">
            <div className="about-header h-60 bg-pink-400">
            <div className="about-info flex justify-between items-center pt-5 mx-20">
                <div className="profile-info ml-16 mt-5">
                    <h2 className="text-3xl font-bold text-gray-600">Anuoluwapo Olusanya</h2>
                    <p className="text-white text-xl font-semibold py-3">I am a Front-end Web Developer Based in Lagos, Nigeria.</p>
                    <p style= {{fontFamily: "Pacifico, cursive"}} className="text-purple-500 text-2xl">I Craft Web Awesomenessss</p>
                </div>
               <img style={{width:"180px", height: "180px"}} src="https://res.cloudinary.com/dz5fsjeb4/image/upload/v1673808241/image1_st0uuz.jpg" className="rounded-full" alt="Anu's-image"/>
            </div>
            </div>
            <div className=" ml-16 flex gap-10">
            <div style={{width: '700px'}}>
                <div  className="about-me mt-10">
                    <h3 className="text-2xl font-bold text-gray-800">About Me</h3>
                    <ReadMore>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</ReadMore>  
                </div>
                <div className="experience mt-5">
                    <h3 className="text-2xl font-bold text-gray-800">Experience</h3>
                    <ReadMore>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</ReadMore>  
                </div>
            </div>
             <div className="location  text-gray-600 mt-8 ml-20 bg-pink-300 w-60 h-40 px-5 py-5 rounded-lg">
                    <p className="text-lg font-semibold">Location</p>
                    <div className="mb-3">
                        <i className=" fa-solid fa-location-dot mr-4"></i>
                        <span className="text-lg font-bold">Lagos, Nigeria</span>
                    </div>
                    <p className="text-lg font-semibold">Portfolio</p>
                    <Link to='/projects' className="text-pink-500 font-bold"> 
                       See Projects  
                       <i className="fa-solid fa-arrow-up-right-from-square ml-4 text-white"></i>
                    </Link>
            </div>
        </div>
            
        </section>
    )
}

export default About;
