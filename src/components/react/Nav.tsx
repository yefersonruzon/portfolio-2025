import { useEffect, useState } from 'react';
import cv from '../../assets/pdf/curriculum.pdf'

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);

            const sections = ['home', 'about', 'portfolio', 'contact'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`flex max-md:flex-col max-md:h-20 ${showMenu && 'max-md:h-96 rounded-md' } overflow-hidden md:justify-between max-md:border-b max-md:border-details max-md:bg-bg z-50 transition-all border-details items-center fixed top-0 ${scrolled ? 'bg-bg-500 backdrop-blur-lg rounded-[5rem] border border-details max-md:py-5 w-[50vw] max-lg:w-[90vw] left-1/2 top-5 py-4 -translate-x-1/2  px-8' : 'left-0 right-0 px-16 max-md:px-10 max-lg:px-10 py-8 max-md:py-5 w-screen'}`}>
            <div className="w-6 max-md:pb-10 max-md:w-full max-md:flex max-md:justify-between max-md:items-center">
                <img src="/RZ.svg" className="object-contain max-md:w-5" alt="Yeferson Ruzon" />
                <button onClick={()=> setShowMenu(!showMenu)} className='max-md:block hidden rounded-full p-2' >
                    <svg  width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_36_566)">
                            <path d="M18.4798 18.38V20.34H6.71979V18.38H18.4798ZM21.4198 11.52V13.48H3.77979V11.52H21.4198ZM18.4798 4.65999V6.61999H6.71979V4.65999H18.4798Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_36_566">
                            <rect width="23.52" height="23.52" fill="white" transform="translate(0.839844 0.739998)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </div>
            <ul className="flex max-md:flex-col items-center textsm justify-center gap-5 font-light ">
                <li className={activeSection === 'home' ? 'bgimage nav' : ''}>
                    <span className='cursor-pointer' onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                        setShowMenu(false);
                    }}>
                        Home
                    </span>
                </li>
                <li className={activeSection === 'about' ? 'bgimage nav' : ''}>
                    <span className='cursor-pointer' onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        setShowMenu(false);
                    }}>
                        About me
                    </span>
                </li>
                <li className={activeSection === 'portfolio' ? 'bgimage nav' : ''}>
                    <span className='cursor-pointer' onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth', block: 'end' });
                        setShowMenu(false);
                    }}>
                        Portfolio
                    </span>
                </li>
                <li className={activeSection === 'contact' ? 'bgimage nav' : ''}>
                    <span className='cursor-pointer' onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        setShowMenu(false);
                    }}>
                        Contact
                    </span>
                </li>
                <li className="">
                    <button 
                        onClick={() => {
                            const link = document.createElement('a');
                            link.href = cv;
                            link.download = 'curriculum.pdf';
                            link.click();
                        }}
                        className={`bg-primary hover:bg-bg border border-primary text-white px-6 py-2 rounded-full hover:text-primary transition-colors cursor-pointer`}
                    >
                        Download CV
                    </button>
                </li>
            </ul>
        </nav>
    )
}
