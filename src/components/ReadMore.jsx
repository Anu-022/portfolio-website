import { useState } from "react";

const ReadMore = ({children}) => {
    const text = children;
    const [isReadMore, setIsReadMore] =useState(true);
    const toggleReadMore = () =>{
        setIsReadMore(!isReadMore);
    }
    return (
      <p className="text-justify cursor-pointer">
        {isReadMore ? text.slice(0,500): text}
        <span onClick={toggleReadMore} className="  block text-pink-500 font-bold">
            {isReadMore ?  'Read More...': 'Show Less'}
        </span>
      </p>


    )
}

export default ReadMore;