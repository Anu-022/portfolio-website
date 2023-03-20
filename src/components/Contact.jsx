
const Contact = () => {
    return (
    <div className="contact px-8 lg:px-0 pb-[50px]">
        <h2 className="text-3xl text-center text-purple-500 font-bold my-5">Contact Me</h2>
        <div className="contact-info lg:flex justify-center lg:gap-10">
            <img src="https://res.cloudinary.com/dz5fsjeb4/image/upload/v1673808241/image1_st0uuz.jpg" alt="Anuoluwapo's Image" className="rounded-lg mx-auto w-[300px] h-[300px] lg:mx-0 lg:w-[400px] lg:h-[400px]"/>
            <div className="mt-20">
                <div>
                    <p className="text-purple-500 font-semibold text-lg">ADDRESS</p>
                    <i className=" text-xl text-purple-500 mr-4 fa-solid fa-location-dot"></i>
                    <span className="text-gray-800 text-xl"> Lagos, Nigeria</span>
                </div>
                <div className="mt-5">
                    <p className="text-purple-500 font-semibold text-lg">EMAIL</p>
                    <i className="text-xl text-purple-500 mr-4 fa-solid fa-envelope"></i>
                    <a href="mailto:ilorianuoluwapo@gmail.com?subject=I'd Like to Work with You" target='_blank' className="text-gray-800 text-xl" >ilorianuoluwapo@gmail.com</a>
                </div>
                <div className="mt-5">
                    <p className="text-purple-500 font-semibold text-lg">PHONE</p>
                    <i className=" text-xl text-purple-500 mr-4 fa-solid fa-phone"></i>
                    <span className="text-gray-800 text-xl">(+234) 9150452303</span>
                    <br/>
                    <span className="text-gray-800 text-xl pl-9">(+234) 9150509629</span>
                </div>
            </div>
        </div>
        <div className="flex justify-center mt-20">
        <ul className="flex  w-40 justify-between p-2 text-purple-500 text-xl ">
                    <li>
                        <a href="https://linkedin.com/in/anuoluwapo-olusanya">
                        <i className="fa-brands fa-linkedin" target= "_blank"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/Madmoiselle_anu"> 
                           <i className='fa-brands fa-twitter' target= "_blank"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Anu-022" target= "_blank"><i className='fa-brands fa-github'></i></a>
                    </li>
                </ul>
        </div>
        
    </div>
    )
}

export default Contact;