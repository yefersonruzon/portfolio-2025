import { useEffect, useState } from 'react';
import menu from '../../assets/Icons/menu.svg'

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);
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
            <li className="bgimage nav">Home</li>
            <li className="text-[#909090] hover:text-white">About me</li>
            <li className="text-[#909090] hover:text-white">Creations</li>
            <li className="text-[#909090] hover:text-white">Contact</li>
            <li className=""><button className={`bg-primary hover:bg-bg border  border-primary text-white px-6 py-2 rounded-full hover:text-primary transition-colors cursor-pointer`}>Download CV</button></li>
        </ul>
    </nav>
  )
}
