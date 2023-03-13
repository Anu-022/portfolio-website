const Training = ({show}) => {
    return (
        <div className="training">
            {show && <div>
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
            </div>
        }
        </div>
    )
}

export default Training;