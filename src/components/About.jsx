import {Link} from 'react-router-dom'
import ReadMore from './ReadMore';
import Training from './Training';
import Skills from './Skills';
import { useState } from 'react';
const About = () => {
    const [showTraining, setShowTraining] = useState(false);
    const [showSkills, setShowSkils] = useState(false);

    function handleOpenTraining() {
        setShowTraining(!showTraining);
    }
    function handleOpenSkills() {
        setShowSkils(!showSkills);
    }
    return (
        <section className="about lg:ml-20 lg:overflow-hidden pb-[50px] ">
            <div className="about-header h-40 lg:h-60 bg-pink-600">
            <div className="about-info flex justify-between items-center pt-5 mx-5 lg:mx-20">
                <div className="profile-info lg:ml-16 mt-5">
                    <h2 className="text-3xl font-bold text-gray-600">Anuoluwapo Olusanya</h2>
                    <p className="text-white text-xl font-semibold py-3">I am a Front-end Web Developer.</p>
                    <p style= {{fontFamily: "Pacifico, cursive"}} className="hidden lg:block text-purple-500 text-2xl">I Create and Design engaging and interactive user experiences.</p>
                </div>
               <img src="https://res.cloudinary.com/dz5fsjeb4/image/upload/v1673808241/image1_st0uuz.jpg" className="hidden lg:block rounded-full w-[180px] h-[180px]" alt="Anu's-image"/>
            </div>
            </div>
            <div className=" px-8 lg:ml-16 lg:flex gap-10">
            <div className="w-full lg:w-[700px]">
                <div  className="about-me mt-10">
                    <h3 className="text-2xl font-bold text-gray-800">About Me</h3>
                    <ReadMore>Hi, I'm a self-taught front-end developer. My passion for development began when I built my first wordpress website. I enjoyed every bit of the development process and this fueled my curiousity to start learning about web technologies. In 2022, I was a beneficiary of the Women Techsters Fellowship (Front-end Development learning track), a 6-month  intensive tech training for women looking to transition into tech. Currently I'm looking for an entry level developer role. I enjoy building functional web apps with delightful user experiences. Asides from work, I enjoy spending time with family. I'm passionate about technology and learning. I'm constantly learning new technologies and concepts because I believe learning opens us up to a world of possibilities. </ReadMore>  
                </div>
                <div className="experience mt-5">
                    <h3 className="text-2xl font-bold text-gray-800">Experience</h3>
                    <button onClick={handleOpenTraining}><i className='fa-solid fa-caret-right text-sm'></i></button>
                    <span className='text-xl font-bold text-gray-800 pl-3'> Training</span>
                    <Training show={showTraining} />
                    <button onClick={handleOpenSkills}><i className='fa-solid fa-caret-right text-sm'></i></button>
                    <span className='text-xl font-bold text-gray-800 pl-3 pt-2'>Skills</span>
                    <Skills show={showSkills} />
                </div>
            </div>
             <div className=" hidden lg:block location  text-gray-600 mt-8 ml-20 bg-pink-300 w-60 h-40 px-5 py-5 rounded-lg">
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
