import data from "./data";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const sliderSetting = {
        infinite: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
             slidesToShow: 1,
            }
          },
          {
            breakpoint: 600,
            settings: {
             slidesToShow: 1,
            }
           }
        ]
      };
    
    
const Projects = () => {
    return (
        <div className="project bg-gradient-to-r from-purple-500 to-pink-500 h-screen ml-20 flex flex-col items-center">
            <h2 className="text-2xl text-white font-semibold pt-5">AnuSanya</h2>
            <p className="text-center py-3 text-gray-800 font-semibold text-xl"> Below are some of the past projects I've worked on:</p>
            <div className="project-container mx-20" style= {{ width: "600px"}}>    
                <Slider {...sliderSetting}>
                    {data.map((item) =>(
                    <div key={item.id}>
                        <div>
                           <img src={item.src} alt={item.name} style={{height:"400px", width: "600px"}}/> 
                            <div>
                                <h3 className="text-center text-white font-bold text-2xl mt-5">{item.name}</h3>
                            </div>   
                        </div>
                        <div className="mt-5 text-center">
                           <a href={item.url} className= "text-white p-3" target="_blank">View Live</a>
                           <a href={item.github} className=" text-white p-3" target="_blank">View on Github</a>
                        </div>
                    </div>         
                )
                )}
            </Slider>
        </div>
        </div>
    )
}

export default Projects;