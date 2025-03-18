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
    const [ActiveSection, setActiveSection] = useState('Index.me');
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
            const newActiveSection = prevSections[prevSections.indexOf(section) - 1] || updatedSections[updatedSections.length - 1] || 'Index.me';
            setActiveSection(newActiveSection);
            return updatedSections;
        });
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
						<h5 className="mx-auto font-light text-sm">Portfolio - {ActiveSection}</h5>
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
					<div className="flex border-r px-5 w-48 border-details flex-col">
						<div className="w-full flex mt-3 justify-between items-center">
							<p className="pointer-events-none">Portfolio</p>
							<img src={menudotsIcon.src} alt="menu dots icon" className="w-11 text-sm hover:bg-details px-3 py-1 rounded-md" />
						</div>
						<ul className="text-md font-poppins text-sm mt-1.5">
							<li className="py-0.5">
								<div id="exp" className=" transform w-full mr-1.5 hover:text-white cursor-pointer"><p className="inline-block">{'>'} experience</p></div>
								<ol className="ml-4 " id="expSub">
									<li className={`py-0.5 hover:text-white cursor-pointer transition-all ${ActiveSection === 'Freelance' ? 'bg-primary text-white rounded-sm px-2 min-w-full py-1.5 my-1.5 hover:bg-primary' : ''}`} onClick={() => setActiveSection('Freelance')}><p>Freelance</p></li>
									<li className={`py-0.5 hover:text-white cursor-pointer transition-all ${ActiveSection === 'IGD S.A.S' ? 'bg-primary text-white rounded-sm px-2 min-w-full py-1.5 my-1.5 hover:bg-primary' : ''}`} onClick={() => setActiveSection('IGD S.A.S')}><p>IGD S.A.S</p></li>
								</ol>
							</li>
							<li className="py-0.5" >
								<div id="src" className=" transform w-full mr-1.5 hover:text-white cursor-pointer"><p className="inline-block">{'>'} src</p></div>
								<ol className="ml-4 " id="srcSub">
									<li className={`py-0.5 hover:text-white cursor-pointer transition-all ${ActiveSection === 'assets' ? 'bg-primary text-white rounded-sm px-2 min-w-full py-1.5 my-1.5 hover:bg-primary' : ''}`} onClick={() => setActiveSection('assets')}><p>assets</p></li>
									<li className={`py-0.5 hover:text-white cursor-pointer transition-all ${ActiveSection === 'components' ? 'bg-primary text-white rounded-sm px-2 min-w-full py-1.5 my-1.5 hover:bg-primary' : ''}`} onClick={() => setActiveSection('components')}><p>components</p></li>
									<li className={`py-0.5 hover:text-white cursor-pointer transition-all ${ActiveSection === 'layouts' ? 'bg-primary text-white rounded-sm px-2 min-w-full py-1.5 my-1.5 hover:bg-primary' : ''}`} onClick={() => setActiveSection('layouts')}><p>layouts</p></li>
									<li className={`py-0.5 hover:text-white cursor-pointer transition-all ${ActiveSection === 'styles' ? 'bg-primary text-white rounded-sm px-2 min-w-full py-1.5 my-1.5 hover:bg-primary' : ''}`} onClick={() => setActiveSection('styles')}><p>styles</p></li>
									<li className={`py-0.5 hover:text-white cursor-pointer transition-all ${ActiveSection === 'Index.me' ? 'bg-primary text-white rounded-sm px-2 min-w-full py-1.5 my-1.5 hover:bg-primary' : ''}`} onClick={() => setActiveSection('Index.me')}><p>index.me</p></li>
								</ol>
							</li>
							
							<li className={`py-0.5 hover:text-white cursor-pointer transition-all ${ActiveSection === 'README.md' ? 'bg-details rounded-sm px-2 min-w-full py-1.5 my-1.5 hover:bg-primary' : ''}`} onClick={() => setActiveSection('README.md')}>
								<p>README.md</p>
							</li>
						</ul>
					</div>
                    <div className='w-full h-full flex flex-col py-2'>
                        <div className='flex gap-3 w-full  px-5  border-details'>
                            {recentSections.map((section, index) => (
                                <button key={index} className={`${ActiveSection === section ? ' bg-primary text-white' : ''} text-sm hover:text-white flex bg-details rounded-sm px-2 py-1.5 my-1.5 border border-details cursor-pointer transition-all`} onClick={() => setActiveSection(section)}>
                                    <p className="inline-block">{section}</p>
                                    {
                                        ActiveSection === section && (
                                            <button className='h-full px-2' onClick={() => removeRecentSection(section)}>x</button>
                                        )
                                    }
                                </button>
                            ))}
                        </div>
                    </div>
				</aside>
			</div>
  )
}
