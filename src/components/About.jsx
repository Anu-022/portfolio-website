import {Link} from 'react-router-dom'
import ReadMore from './ReadMore'; 
const About = () => {
    return (
        <section className="about ml-20 overflow-hidden">
            <div className="about-header h-60 bg-pink-600">
            <div className="about-info flex justify-between items-center pt-5 mx-20">
                <div className="profile-info ml-16 mt-5">
                    <h2 className="text-3xl font-bold text-gray-600">Anuoluwapo Olusanya</h2>
                    <p className="text-white text-xl font-semibold py-3">I am a Front-end Web Developer.</p>
                    <p style= {{fontFamily: "Pacifico, cursive"}} className="text-purple-500 text-2xl">I Create and Design engaging and interactive user experiences.</p>
                </div>
               <img style={{width:"180px", height: "180px"}} src="https://res.cloudinary.com/dz5fsjeb4/image/upload/v1673808241/image1_st0uuz.jpg" className="rounded-full" alt="Anu's-image"/>
            </div>
            </div>
            <div className=" ml-16 flex gap-10">
            <div style={{width: '700px'}}>
                <div  className="about-me mt-10">
                    <h3 className="text-2xl font-bold text-gray-800">About Me</h3>
                    <ReadMore>Hi, I'm a self-taught front-end developer. My passion for development began when I built my first wordpress website. I enjoyed every bit of the development process and this fueled my curiousity to start learning about web technologies. In 2022, I was a beneficiary of the Women Techsters Fellowship (Front-end Development learning track), a 6-month  intensive tech training for women looking to transition into tech. Currently I'm looking for an entry level developer role. I enjoy building functional web apps with delightful user experiences. Asides from work, I enjoy spending time with family. I'm passionate about technology and learning. I'm constantly learning new technologies and concepts because I believe learning opens us up to a world of possibilities. </ReadMore>  
                </div>
                <div className="experience mt-5">
                    <h3 className="text-2xl font-bold text-gray-800">Experience</h3>
                    <h2 className='text-xl font-bold text-gray-800 pl-3'> Training</h2>
                    <div className='border-dashed border-b border-gray-800 py-5 pl-6'>
                    <h2 className='text-xl font-bold text-gray-800'>Frontend Development Training - Women Techsters Fellowship</h2>
                     <p className='py-2'>August 2022- March 2023</p>
                     <ul className='list-disc pl-9'>
                     <li>Six Months intensive virtual training in Frontend Development Technologies.</li>
                        <li>Technologies Learnt: Html, CSS,Javascript, React, TailwindCSS </li>
                     </ul>
                    </div>
                    <div className="py-5 border-dashed border-b border-gray-800 pl-6">
                    <h2 className='text-xl font-bold text-gray-800 '>Frontend Development Training - SheCodes Foundation</h2>
                     <p className='py-2'>Feb 2022- July 2022</p>
                     <ul className='list-disc pl-9'>
                         <li>Self-Paced Virtual Bootcamp in Frontend Development.</li>
                         <li>Technologies Learnt: Html, CSS,Javascript, React, Bootsrap </li>
                     </ul>
                    </div>
            
                    <h2 className='text-xl font-bold text-gray-800 pl-3 pt-2'>Skills</h2>
                    <div className="py-5 pl-6 border-dashed border-b border-gray-800">
                    <h2 className='text-xl font-bold text-gray-800'>Languages</h2>
                      <ul className='list-disc flex justify-between w-52 pl-9'>
                         <li>Html</li>
                         <li>CSS</li>
                         <li>Javascript</li> 
                       </ul>
                    </div>
                    <div className="py-5 pl-6 border-dashed border-b border-gray-800">
                    <h2 className='text-xl font-bold text-gray-800'>Libraries</h2>
                        <ul className='list-disc flex justify-between pl-9'>
                            <li>React</li>
                        </ul>
                    </div>
                    <div className="py-5 pl-6 border-dashed border-b border-gray-800">
                    <h2 className='text-xl font-bold text-gray-800'>Frameworks</h2>
                    <ul className='list-disc flex justify-between w-52 pl-9'>
                        <li>Bootstrap</li>
                        <li>TailwindCSS</li>
                    </ul>
                    </div>
                    <div className="py-5 pl-6 border-dashed border-b border-gray-800">
                    <h2 className='text-xl font-bold text-gray-800'>Tools</h2>
                   <ul className='list-disc flex justify-between w-80 pl-9'>
                    <li>Git</li>
                    <li>Github</li>
                    <li>NPM</li>
                    <li>VSCODE</li>
                    <li>Slack</li>
                   </ul>
                    </div>
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
