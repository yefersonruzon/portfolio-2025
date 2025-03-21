import { useState } from 'react'
import projects from '../../../../projects.json'

export default function Projects() {
    const [Active, setActive] = useState('');
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setActive('');
            setIsClosing(false);
        }, 200);
    };

    return (
        <main className='grid grid-cols-5 relative overflow-y-scroll h-full gap-4'>
            {
                projects.map((project) => {
                    return (
                        <div onClick={() => setActive(project.title)} key={project.title} className={`flex group showIDECard h-full flex-col border hover:bg-details cursor-pointer border-details rounded-md overflow-hidden`}>
                            <header className=''>
                                <img src={project.image} alt={project.title} />
                            </header>
                            <div className='px-4 mb-4'>
                                <h2 className='my-2 text-white'>{project.title}</h2>
                                <p className='line-clamp-5 group-hover:text-white transition-colors font-light'>{project.description}</p>
                            </div>
                        </div>
                    )
                })
            }
            {
                Active && (
                    <div onClick={handleClose} className={`absolute  inset-0 m-auto w-full h-full overflow-hidden bg-bg-500 flex-col flex items-center`}>
                        <div className={`w-1/2 rounded-md  group showIDECard mt-[1%] bg-bg border border-details h-fit ${isClosing ? 'closeIDECard' : ''}`}>
                            <img src={projects.find((project) => project.title === Active)?.image} alt={Active} className='rounded-md object-cover' />
                            <h2 className=' text-white px-5 pt-3 pb-2'>{Active}</h2>
                            <p className=' group-hover:text-white transition-colors  px-5 pb-6'>{projects.find((project) => project.title === Active)?.description}</p>
                        </div>
                    </div>
                )
            }
        </main>
    )
}
