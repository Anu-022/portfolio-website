const Skills = ({show}) => {
    return (
        <div className="skills">
          { show && <div>
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
          }
        </div>
    )
}
export default Skills;