import recIcon from '../../assets/Icons/rec.svg'
import maxIcon from '../../assets/Icons/min.svg'
import xIcon from '../../assets/Icons/x.svg'
import folderIcon from '../../assets/Icons/folder.svg'
import searchIcon from '../../assets/Icons/Search.svg'
import categoryIcon from '../../assets/Icons/category.svg'
import settingIcon from '../../assets/Icons/setting.svg'
import menudotsIcon from '../../assets/Icons/menudots.svg'
import { useState, useEffect, type JSX } from 'react'

export default function IDE() {
    const [ActiveSection, setActiveSection] = useState('About.astro');
    const [recentSections, setRecentSections] = useState<string[]>([]);

    useEffect(() => {
        setRecentSections(prevSections => {
            const updatedSections = [ActiveSection, ...prevSections];
            return [...new Set(updatedSections)];
        });
    }, [ActiveSection]);


    useEffect(() => {
        const srcElement = document.getElementById('src');
        const srcSubElement = document.getElementById('srcSub');
        const expElement = document.getElementById('exp');
        const expSubElement = document.getElementById('expSub');

        const toggleHidden = (element: HTMLElement | null) => {
            element?.classList.toggle('hidden');
        };

        srcElement?.addEventListener('click', () => toggleHidden(srcSubElement));
        expElement?.addEventListener('click', () => toggleHidden(expSubElement));

        return () => {
            srcElement?.removeEventListener('click', () => toggleHidden(srcSubElement));
            expElement?.removeEventListener('click', () => toggleHidden(expSubElement));
        };
    }, []);
    
    const removeRecentSection = (section: string) => {
        setRecentSections(prevSections => {
            const updatedSections = prevSections.filter(s => s !== section);
            const newActiveSection = prevSections[prevSections.indexOf(section) - 1] || updatedSections[updatedSections.length - 1] ;
            setActiveSection(newActiveSection);
            return updatedSections;
        });
    };

    const renderActiveSection = () => {
        switch (ActiveSection) {
            case 'About.astro':
                return (
                    <div className="flex flex-col gap-2 text-gray-300">
                        <p className="text-sm font-light">
                            <span className='pr-2'>---</span><br /> 
                                <span className="text-sm"><span className='text-purple-400'>import</span> [JavaScript, TypeScript, ReactJs, Zustand, MongoDB, Axios, Tailwind, ThreeJS, Astro] <span className='text-purple-400'>from</span> 'Web-Development';</span><br />
                                <span className="text-sm"><span className='text-purple-400'>import</span> [ReactNative, Kotlin, Compose, AndroidStudio] <span className='text-purple-400'>from</span> 'Mobile-Development';</span><br />
                                <span className="text-sm"><span className='text-purple-400'>import</span> [Sketch, Figma, Framer, WireframeCC] <span className='text-purple-400'>from</span> 'UI/UX-Design';</span><br />
                                <span className="text-sm"><span className='text-purple-400'>import</span> [Illustrator, Blender, AfterEffects] <span className='text-purple-400'>from</span> 'Dynamic-Web-Graphics';</span><br />
                            <span className='pr-2'>---</span>
                        </p>
                        <p className="text-sm font-light">
                            <span className='text-primary'><span className='text-gray-500'>{`<`}</span>Layout<span className='text-gray-500'>{`>`}</span></span> <br />
                            <span className='text-primary ml-4'><span className='text-gray-500'>{`<`}</span>h1<span className='text-gray-500'>{`>`}</span></span> <br />
                                <span className='ml-10'>Hi!👋, I'm Yeferson Ruzon, Web front-end developer & UI/UX Designer.</span> <br />
                            <span className='text-primary ml-4'><span className='text-gray-500'>{`</`}</span>h1<span className='text-gray-500'>{`>`}</span></span> <br />
                            
                            <span className='text-primary ml-4'><span className='text-gray-500'>{`<`}</span>p<span className='text-gray-500'>{`>`}</span></span> <br />
                            <span className='ml-10 block'>
                                I'm a passionate UI/UX Designer & Web Front-End Developer of 21 years old. <br /> 
                                My focus is on creating digital experiences that are not only visually appealing <br />
                                but also intuitive and functional. I combine my UI/UX design skills with <br />
                                a strong background in front-end development to build user interfaces that trul resonate with users.</span> <br />
                            <span className='ml-10 block'>
                                My journey has equipped me with a unique blend of design thinking and technical <br />
                                proficiency, enabling me to bridge the gap between aesthetics and functionality. <br />
                                Whether it's crafting pixel-perfect designs or writing clean, efficient code, I am committed to <br />
                                creating digital products that leave a lasting impact.</span>
                            <span className='text-primary ml-4'><span className='text-gray-500'>{`</`}</span>p<span className='text-gray-500'>{`>`}</span></span>
                            <br />
                            <span className='text-primary'><span className='text-gray-500'>{`</`}</span>Layout<span className='text-gray-500'>{`>`}</span></span>
                        </p>
                    </div>
                );
            case 'Freelance.json' : 
                return (
                    <div className="flex flex-col gap-2 text-gray-300">
                        <pre className="text-sm font-light">
                            <span className='text-yellow-300'>{`{`}</span>
                            <ol className="list-none">
                                <li className='text-purple-400 ml-4'>{`"FreelanceExperience": {`}</li>
                                <li className='text-[#f1a181] ml-8'>"company": "Freelance",</li>
                                <li className='text-[#f1a181] ml-8'>"startDate": "2020",</li>
                                <li className='text-[#f1a181] ml-8'>"endDate": "null",</li>
                                <li className='text-purple-400 ml-8'>{`"Most-relevant-projects": {`}</li>
                                    <ol className="list-none ml-12">
                                        <li className='text-[#f1a181]'>"Solei",</li>
                                        <li className='text-[#f1a181]'>"Trady",</li>
                                        <li className='text-[#f1a181]'>"Inverbello",</li>
                                        <li className='text-[#f1a181]'>"Suvalor",</li>
                                        <li className='text-[#f1a181]'>"Domus"</li>
                                    </ol>
                                <li className='text-purple-400 ml-8'>{`}`}</li>
                                <li className='text-purple-400 ml-8'>{`"summary": {`}</li>
                                    <p className='text-[#f1a181] ml-12'>"Desde 2020, he trabajado en proyectos como Hoteles y restaurantes, Páginas interactivas para criptomonedas. <br /> Usé tecnologías como HTML, CSS, JavaScript, TypeScript, React, Next.js y herramientas de diseño como Figma, Wireframe.cc.",</p>
                                <li className='text-purple-400 ml-8'>{`}`}</li>
                                <li className='text-purple-400 ml-8'>{`"designTools": {`}</li>
                                    <ol className="list-none ml-12">
                                    <li className='text-[#f1a181]'>"Figma",</li>
                                        <li className='text-[#f1a181]'>"Wireframe.cc",</li>
                                        <li className='text-[#f1a181]'>"illustrator",</li>
                                        <li className='text-[#f1a181]'>"Blender",</li>
                                        <li className='text-[#f1a181]'>"Framer",</li>
                                    </ol>
                                <li className='text-purple-400 ml-8'>{`}`}</li>
                                <li className='text-purple-400 ml-8'>{`"technologies": {`}</li>
                                    <ol className="list-none ml-12">
                                        <li className='text-[#f1a181]'>"React",</li>
                                        <li className='text-[#f1a181]'>"HTML",</li>
                                        <li className='text-[#f1a181]'>"CSS",</li>
                                        <li className='text-[#f1a181]'>"Next.js",</li>
                                        <li className='text-[#f1a181]'>"Tailwind CSS",</li>
                                        <li className='text-[#f1a181]'>"TypeScript",</li>
                                        <li className='text-[#f1a181]'>"JavaScript"</li>
                                    </ol>
                                <li className='text-purple-400 ml-8'>{`}`}</li>
                                <li className='text-purple-400 ml-4'>{`}`}</li>
                            </ol>
                            <span className='text-yellow-300'>{`}`}</span>
                        </pre>
                    </div>
                );
            case 'IGD_S.A.S.json' : 
                return (
                    <div className="flex flex-col gap-2 text-gray-300">
                        <pre className="text-sm font-light">
                            <span className='text-yellow-300'>{`{`}</span>
                            <ol className="list-none">
                                <li className='text-purple-400 ml-4'>{`"FreelanceExperience": {`}</li>
                                <li className='text-[#f1a181] ml-8'>"company": "IGD S.A.S",</li>
                                <li className='text-[#f1a181] ml-8'>"startDate": "Oct-2022",</li>
                                <li className='text-[#f1a181] ml-8'>"endDate": "Feb-2025",</li>
                                <li className='text-purple-400 ml-8'>{`"Most-relevant-projects": {`}</li>
                                    <ol className="list-none ml-12">
                                        <li className='text-[#f1a181]'>"SmartCredit",</li>
                                        <li className='text-[#f1a181]'>"igdsas.com",</li>
                                        <li className='text-[#f1a181]'>"Finestar",</li>
                                        <li className='text-[#f1a181]'>"Trady web & software",</li>
                                    </ol>
                                <li className='text-purple-400 ml-8'>{`}`}</li>
                                <li className='text-purple-400 ml-8'>{`"summary": {`}</li>
                                    <p className='text-[#f1a181] ml-12'>"I have been working as a front-end web developer at I.G.D, a company specialised in software consulting and design. <br /> In this position with a full team, collaborating on various projects and maintaining a high standard. <br /> During my time at the company, I have worked with technologies such as ReactJS, ViteJS, Tailwind, NextJS, <br /> and Zustand, among others. I am also the lead designer for the company, creating interactive web <br /> and mobile designs with Figma and using advanced prototyping techniques."</p>
                                <li className='text-purple-400 ml-8'>{`}`}</li>
                                <li className='text-purple-400 ml-8'>{`"designTools": {`}</li>
                                    <ol className="list-none ml-12">
                                        <li className='text-[#f1a181]'>"Figma",</li>
                                        <li className='text-[#f1a181]'>"Wireframe.cc",</li>
                                        <li className='text-[#f1a181]'>"illustrator",</li>
                                        <li className='text-[#f1a181]'>"Blender",</li>
                                        <li className='text-[#f1a181]'>"Framer",</li>
                                    </ol>
                                <li className='text-purple-400 ml-8'>{`}`}</li>
                                <li className='text-purple-400 ml-8'>{`"technologies": {`}</li>
                                    <ol className="list-none ml-12">
                                        <li className='text-[#f1a181]'>"React",</li>
                                        <li className='text-[#f1a181]'>"HTML",</li>
                                        <li className='text-[#f1a181]'>"CSS",</li>
                                        <li className='text-[#f1a181]'>"Next.js",</li>
                                        <li className='text-[#f1a181]'>"Tailwind CSS",</li>
                                        <li className='text-[#f1a181]'>"TypeScript",</li>
                                        <li className='text-[#f1a181]'>"JavaScript"</li>
                                    </ol>
                                <li className='text-purple-400 ml-8'>{`}`}</li>
                                <li className='text-purple-400 ml-4'>{`}`}</li>
                            </ol>
                            <span className='text-yellow-300'>{`}`}</span>
                        </pre>
                    </div>
                );

            default:
                break;
        }
    return null;
};

  return (
    <div className="h-[82dvh] flex bg-bg z-10 flex-col shadow text-gray-400 shadow-shadow border w-full rounded-xl overflow-hidden border-details">
				<header className="flex px-7 py-5 border border-details">
					<div className="flex items-center w-full">
						<div className="flex font-light items-center gap-9">
							<img src='./RZ.svg' alt="Yeferson Ruzon Logo" className="w-5" />
							<ul className="flex items-center cursor-default justify-center text-sm gap-5 ">
								<li className="hover:text-white">File</li>
								<li className="hover:text-white">Edit</li>
								<li className="hover:text-white">Selection</li>
								<li className="hover:text-white">Terminal</li>
								<li className="hover:text-white">View</li>
								<li className="hover:text-white">Window</li>
								<li className="hover:text-white">Help</li>
							</ul>
						</div>
						<h5 className="mx-auto font-light text-sm">Portfolio{ActiveSection ? ' - ' + ActiveSection : ''}</h5>
						<ol className="flex text-white items-center justify-center -my-2 -mr-3 ml-auto">
							<li className="hover:bg-details w-10 h-10 flex items-center justify-center"><img src={recIcon.src} alt="min icon" /></li>
							<li className="hover:bg-details w-10 h-10 flex items-center justify-center"><img src={maxIcon.src} alt="max icon" /></li>
							<li className="hover:bg-red-700 w-10 h-10 flex items-center justify-center"><img src={xIcon.src} alt="x icon" /></li>
						</ol>
					</div>
				</header>
				<aside className="flex h-full">
					<div className="flex h-full">
						<div className="flex px-4 py-6 flex-col justify-between border border-t-0 border-details">
							<ul className="flex items-center flex-col gap-5">
								<li className="w-11 text-sm border hover:bg-details border-details px-3 py-3 rounded-md"><img src={folderIcon.src} alt="folder icon" /></li>
								<li className="w-11 text-sm hover:bg-details px-3 py-3 rounded-md"><img src={searchIcon.src} alt="search icon" /></li>
								<li className="w-11 text-sm hover:bg-details px-3 py-3 rounded-md"><img src={categoryIcon.src} alt="category icon" /></li>
							</ul>
							<div className="flex items-center justify-center w-full">
								<img src={settingIcon.src} alt="setting icon" className="w-11 text-sm hover:bg-details px-3 py-3 rounded-md" />
							</div>
						</div>
					</div>
					<div className="flex border-r px-5 w-52 border-details flex-col">
						<div className="w-full flex mt-3 justify-between items-center">
							<p className="pointer-events-none">Portfolio</p>
							<img src={menudotsIcon.src} alt="menu dots icon" className="w-11 text-sm hover:bg-details px-3 py-1 rounded-md" />
						</div>
						<ul className="text-md font-poppins text-sm mt-1.5">
							<li className="py-0.5">
								<div id="exp" className=" transform w-full mr-1.5 hover:text-white cursor-pointer"><p className="inline-block">{'>'} experience</p></div>
								<ol className="ml-4 " id="expSub">
									<li className={`py-0.5 hover:text-white cursor-pointer transition-all ${ActiveSection === 'Freelance.json' ? 'bg-primary text-white rounded-sm px-2 min-w-full py-1.5 my-1.5 hover:bg-primary' : ''}`} onClick={() => setActiveSection('Freelance.json')}><p>Freelance.json</p></li>
									<li className={`py-0.5 hover:text-white cursor-pointer transition-all ${ActiveSection === 'IGD_S.A.S.json' ? 'bg-primary text-white rounded-sm px-2 min-w-full py-1.5 my-1.5 hover:bg-primary' : ''}`} onClick={() => setActiveSection('IGD_S.A.S.json')}><p>IGD_S.A.S.json</p></li>
								</ol>
							</li>
							<li className="py-0.5" >
								<div id="src" className=" transform w-full mr-1.5 hover:text-white cursor-pointer"><p className="inline-block">{'>'} src</p></div>
								<ol className="ml-4 " id="srcSub">
									<li className={`py-0.5 hover:text-white cursor-pointer transition-all ${ActiveSection === 'assets' ? 'bg-primary text-white rounded-sm px-2 min-w-full py-1.5 my-1.5 hover:bg-primary' : ''}`} onClick={() => setActiveSection('assets')}><p>assets</p></li>
									<li className={`py-0.5 hover:text-white cursor-pointer transition-all ${ActiveSection === 'components' ? 'bg-primary text-white rounded-sm px-2 min-w-full py-1.5 my-1.5 hover:bg-primary' : ''}`} onClick={() => setActiveSection('components')}><p>components</p></li>
									<li className={`py-0.5 hover:text-white cursor-pointer transition-all ${ActiveSection === 'mobile' ? 'bg-primary text-white rounded-sm px-2 min-w-full py-1.5 my-1.5 hover:bg-primary' : ''}`} onClick={() => setActiveSection('mobile')}><p>mobile</p></li>
									<li className={`py-0.5 hover:text-white cursor-pointer transition-all ${ActiveSection === 'styles' ? 'bg-primary text-white rounded-sm px-2 min-w-full py-1.5 my-1.5 hover:bg-primary' : ''}`} onClick={() => setActiveSection('styles')}><p>styles</p></li>
									<li className={`py-0.5 hover:text-white cursor-pointer transition-all ${ActiveSection === 'About.astro' ? 'bg-primary text-white rounded-sm px-2 min-w-full py-1.5 my-1.5 hover:bg-primary' : ''}`} onClick={() => setActiveSection('About.astro')}><p>About.astro</p></li>
								</ol>
							</li>
							
							<li className={`py-0.5 hover:text-white cursor-pointer transition-all ${ActiveSection === 'README.md' ? 'bg-details rounded-sm px-2 min-w-full py-1.5 my-1.5 hover:bg-primary' : ''}`} onClick={() => setActiveSection('README.md')}>
								<p>README.md</p>
							</li>
						</ul>
					</div>
                    <div className='w-full h-full flex flex-col py-2'>
                        <div className='flex gap-3 w-full  px-5 border-b pb-2  border-details min-h-10'>
                            {
                            recentSections.map((section, index) => (
                                section && (
                                    <div key={index} className={`${ActiveSection === section ? ' bg-primary text-white' : ''} text-sm w-32 items-center hover:text-white flex bg-details rounded-sm px-2 py-1.5 my-1.5 border border-details cursor-pointer transition-all`} onClick={() => setActiveSection(section)}>
                                        <p className='pb-0.5'>{section}</p>
                                        {ActiveSection === section && (
                                            <button className='h-full px-2 pb-1.5' onClick={() => removeRecentSection(section)}>x</button>
                                        )}
                                    </div>
                                )
                            ))
                            }
                        </div>
                        <code className='w-full overflow-hidden overflow-y-scroll h-[75%] px-5 py-2'>
                            {renderActiveSection()}
                        </code>
                        <section className="w-full h-[25%] flex flex-col border-t border-details">
                            <div className='w-full text-sm flex border-b border-details justify-between px-8 py-4'>
                                <div className='flex gap-5'>
                                    <p className='relative after:absolute after:w-1/2 after:h-0.5 after:bg-text-details flex items-center justify-center after:-bottom-0.5 after:rounded-md'>Terminal</p>
                                    <p className='relative flex items-center justify-center'>Output</p>
                                </div>
                                <button className='text-lg'>x</button>
                            </div>
                            <p className='text-sm ml-8 mt-3'>
                                C:\Users\ruzon{'>'}
                            </p>
                        </section>
                    </div>
				</aside>
			</div>
  )
}
