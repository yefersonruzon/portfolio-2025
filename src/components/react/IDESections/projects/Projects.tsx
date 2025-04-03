import { useState } from 'react'
import projects from './projects.json'

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
        <main className='grid  max-md:flex h-fit max-md:flex-col grid-cols-5 relative overflow-y-hidden gap-4'>
            {
                projects.map((project) => {
                    return (
                        <div onClick={() => setActive(project.title)} key={project.title} className={`flex group showIDECard1 h-full flex-col border bg-bg hover:bg-details cursor-pointer border-details rounded-md overflow-hidden`}>
                            <header className='w-[95%] h-fit overflow-hidden relative mt-2 mb-2 rounded-sm mx-auto border border-details'>
                                <img src={project.image} alt={project.title} />
                            </header>
                            <div className='px-4 mb-4'>
                                <h2 className='my-2 text-white'>{project.title}</h2>
                                <p className='line-clamp-3 group-hover:text-white transition-colors font-light'>{project.description}</p>
                            </div>
                        </div>
                    )
                })
            }
            {
                Active && (
                    <div onClick={handleClose} className={`absolute  inset-0 m-auto w-full h-full overflow-hidden bg-bg-500 backdrop-blur-[1px] flex-col flex justify-center items-center`}>
                        <div className={`w-1/2 rounded-md group showIDECard bg-bg border border-details h-fit ${isClosing ? 'closeIDECard' : ''}`}>
                            <div className=''>
                                <img src={projects.find((project) => project.title === Active)?.image} alt={Active} className='rounded-md object-cover' />
                            </div>
                            <h2 className=' text-white px-5 pt-3 pb-2'>{Active}</h2>
                            <p className=' group-hover:text-white transition-colors  px-5 pb-6'>{projects.find((project) => project.title === Active)?.description}</p>
                        </div>
                    </div>
                )
            }
        </main>
    )
}
