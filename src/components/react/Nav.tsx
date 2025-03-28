import { useEffect, useState } from 'react';

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

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
        <nav className={`flex justify-between z-50 transition-all border-details items-center fixed top-0 ${scrolled ? 'bg-bg-500 backdrop-blur-lg rounded-full border border-details w-[50vw] left-1/2 top-5 py-4 -translate-x-1/2  px-8' : 'left-0  px-16 py-8 w-screen'}`}>
            <div className="w-6">
                <img src="/RZ.svg" className="object-contain" alt="Yeferson Ruzon" />
            </div>
            <ul className="flex items-center textsm justify-center gap-5 font-light ">
                <li className={activeSection === 'home' ? 'bgimage nav' : ''}>
                    <span className='cursor-pointer' onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                    }}>
                        Home
                    </span>
                </li>
                <li className={activeSection === 'about' ? 'bgimage nav' : ''}>
                    <span className='cursor-pointer' onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}>
                        About me
                    </span>
                </li>
                <li className={activeSection === 'portfolio' ? 'bgimage nav' : ''}>
                    <span className='cursor-pointer' onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth', block: 'end' });
                    }}>
                        Portfolio
                    </span>
                </li>
                <li className={activeSection === 'contact' ? 'bgimage nav' : ''}>
                    <span className='cursor-pointer' onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}>
                        Contact
                    </span>
                </li>
                <li className=""><button className={`bg-primary hover:bg-bg border  border-primary text-white px-6 py-2 rounded-full hover:text-primary transition-colors cursor-pointer`}>Download CV</button></li>
            </ul>
        </nav>
    )
}
