import recIcon from "../../assets/Icons/rec.svg";
import maxIcon from "../../assets/Icons/min.svg";
import xIcon from "../../assets/Icons/x.svg";
import settingIcon from "../../assets/Icons/setting.svg";
import menudotsIcon from "../../assets/Icons/menudots.svg";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

import expContent from "./IDESections/Exp.md?raw";
import IGdContent from "./IDESections/IGD.md?raw";
import FreelancerContent from "./IDESections/Freelancer.md?raw";
import AboutContent from "./IDESections/About.md?raw";
import ReadM from "./IDESections/readM.md?raw";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark.css";
import Projects from "./IDESections/projects/Projects";
import Search from "./IDESections/Search";

export default function IDE() {
  const [ActiveSection, setActiveSection] = useState("About.astro");
  const [recentSections, setRecentSections] = useState<string[]>([]);
  const [IDEActiveSection, setIDEActiveSection] = useState<string>('Code');

  useEffect(() => {
    setRecentSections((prevSections) => {
      const updatedSections = [ActiveSection, ...prevSections];
      return [...new Set(updatedSections)];
    });
  }, [ActiveSection]);

  useEffect(() => {
    const srcElement = document.getElementById("src");
    const srcSubElement = document.getElementById("srcSub");
    const expElement = document.getElementById("exp");
    const expSubElement = document.getElementById("expSub");

    const toggleHidden = (element: HTMLElement | null) => {
      element?.classList.toggle("hidden");
    };

    srcElement?.addEventListener("click", () => toggleHidden(srcSubElement));
    expElement?.addEventListener("click", () => toggleHidden(expSubElement));

    return () => {
      srcElement?.removeEventListener("click", () =>
        toggleHidden(srcSubElement)
      );
      expElement?.removeEventListener("click", () =>
        toggleHidden(expSubElement)
      );
    };
  }, []);

  const removeRecentSection = (section: string) => {
    setRecentSections((prevSections) => {
      const updatedSections = prevSections.filter((s) => s !== section);
      const newActiveSection =
        prevSections[prevSections.indexOf(section) - 1] ||
        updatedSections[updatedSections.length - 1];
      setActiveSection(newActiveSection);
      return updatedSections;
    });
  };

  const renderActiveSection = () => {
    switch (ActiveSection) {
      case "About.astro":
        return (
          <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
            {AboutContent as string}
          </ReactMarkdown>
        );
      case "Freelance.json":
        return (
          <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
            {FreelancerContent as string}
          </ReactMarkdown>
        );
      case "IGD_S.A.S.json":
        return (
          <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
            {IGdContent as string}
          </ReactMarkdown>
        );
      case "Exp.tsx":
        return (
          <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
            {expContent as string}
          </ReactMarkdown>
        );
      case "README.md":
        return (
          <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
            {ReadM as string}
          </ReactMarkdown>
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
            <img src="./RZ.svg" alt="Yeferson Ruzon Logo" className="w-5" />
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
          <h5 className="mx-auto font-light text-sm">
            Portfolio{ActiveSection ? " - " + ActiveSection : ""}
          </h5>
          <ol className="flex text-white items-center justify-center -my-2 -mr-3 ml-auto">
            <li className="hover:bg-details w-10 h-10 flex items-center justify-center">
              <img src={recIcon.src} alt="min icon" />
            </li>
            <li className="hover:bg-details w-10 h-10 flex items-center justify-center">
              <img src={maxIcon.src} alt="max icon" />
            </li>
            <li className="hover:bg-red-700 w-10 h-10 flex items-center justify-center">
              <img src={xIcon.src} alt="x icon" />
            </li>
          </ol>
        </div>
      </header>
      <aside className="flex h-full">
        <div className="flex h-full">
          <div className="flex px-4 py-6 flex-col justify-between border border-t-0 border-details">
            <ul className="flex items-center flex-col gap-5">
              <li onClick={()=>setIDEActiveSection('Code')} className={`w-11 text-sm px-3 py-3 rounded-md ${IDEActiveSection === 'Code' ? 'border bg-primary border-details ' : 'hover:bg-details'}`}>
                <svg className={`w-[1.2rem] fill-[#9099AC] ${IDEActiveSection === 'Code' && 'fill-white'} `} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.8333 26.5416H8.16658C3.02159 26.5416 1.45825 24.9783 1.45825 19.8333V8.16665C1.45825 3.02165 3.02159 1.45831 8.16658 1.45831H9.91658C11.9583 1.45831 12.5999 2.12331 13.4166 3.20831L15.1666 5.54165C15.5516 6.05498 15.6099 6.12498 16.3333 6.12498H19.8333C24.9783 6.12498 26.5416 7.68831 26.5416 12.8333V19.8333C26.5416 24.9783 24.9783 26.5416 19.8333 26.5416ZM8.16658 3.20831C3.98992 3.20831 3.20825 4.00165 3.20825 8.16665V19.8333C3.20825 23.9983 3.98992 24.7916 8.16658 24.7916H19.8333C24.0099 24.7916 24.7916 23.9983 24.7916 19.8333V12.8333C24.7916 8.66831 24.0099 7.87498 19.8333 7.87498H16.3333C14.8399 7.87498 14.3499 7.36165 13.7666 6.59165L12.0166 4.25831C11.4099 3.45331 11.2233 3.20831 9.91658 3.20831H8.16658Z"/>
                  <path d="M23.3333 8.31831C22.8549 8.31831 22.4583 7.92165 22.4583 7.44331V5.83331C22.4583 3.98998 21.6766 3.20831 19.8333 3.20831H9.33325C8.85492 3.20831 8.45825 2.81165 8.45825 2.33331C8.45825 1.85498 8.85492 1.45831 9.33325 1.45831H19.8333C22.6566 1.45831 24.2083 3.00998 24.2083 5.83331V7.44331C24.2083 7.92165 23.8116 8.31831 23.3333 8.31831Z" />
                </svg>
              </li>
              <li onClick={()=>setIDEActiveSection('Search')} className={`w-11 text-sm  px-3 py-3 rounded-md ${IDEActiveSection === 'Search' ? 'border bg-primary border-details ' : 'hover:bg-details'}`}>
                <svg className={`w-[1.2rem] fill-[#9099AC] ${IDEActiveSection === 'Search' && 'fill-white'} `} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8333 4.375C8.16192 4.375 4.375 8.16192 4.375 12.8333C4.375 17.5047 8.16192 21.2917 12.8333 21.2917C17.5047 21.2917 21.2917 17.5047 21.2917 12.8333C21.2917 8.16192 17.5047 4.375 12.8333 4.375ZM2.625 12.8333C2.625 7.19543 7.19543 2.625 12.8333 2.625C18.4712 2.625 23.0417 7.19543 23.0417 12.8333C23.0417 15.3373 22.1402 17.6306 20.644 19.4066L25.1187 23.8813C25.4604 24.223 25.4604 24.777 25.1187 25.1187C24.777 25.4604 24.223 25.4604 23.8813 25.1187L19.4066 20.644C17.6306 22.1402 15.3373 23.0417 12.8333 23.0417C7.19543 23.0417 2.625 18.4712 2.625 12.8333Z"/>
                </svg>
              </li>
              <li onClick={()=>setIDEActiveSection('designs')} className={`w-11 text-sm px-3 py-3 rounded-md ${IDEActiveSection === 'designs' ? 'border bg-primary border-details' : 'hover:bg-details'}`}>
                <svg className={`w-[1.2rem] stroke-[#9099AC] ${IDEActiveSection === 'designs' && 'stroke-white'} `} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.8333 11.6666H22.1666C24.4999 11.6666 25.6666 10.5 25.6666 8.16665V5.83331C25.6666 3.49998 24.4999 2.33331 22.1666 2.33331H19.8333C17.4999 2.33331 16.3333 3.49998 16.3333 5.83331V8.16665C16.3333 10.5 17.4999 11.6666 19.8333 11.6666Z"  stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M5.83325 25.6666H8.16659C10.4999 25.6666 11.6666 24.5 11.6666 22.1666V19.8333C11.6666 17.5 10.4999 16.3333 8.16659 16.3333H5.83325C3.49992 16.3333 2.33325 17.5 2.33325 19.8333V22.1666C2.33325 24.5 3.49992 25.6666 5.83325 25.6666Z"  stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M6.99992 11.6666C9.57725 11.6666 11.6666 9.57731 11.6666 6.99998C11.6666 4.42265 9.57725 2.33331 6.99992 2.33331C4.42259 2.33331 2.33325 4.42265 2.33325 6.99998C2.33325 9.57731 4.42259 11.6666 6.99992 11.6666Z"  stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M20.9999 25.6666C23.5772 25.6666 25.6666 23.5773 25.6666 21C25.6666 18.4227 23.5772 16.3333 20.9999 16.3333C18.4226 16.3333 16.3333 18.4227 16.3333 21C16.3333 23.5773 18.4226 25.6666 20.9999 25.6666Z"  stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </li>
            </ul>
            <div className="flex items-center justify-center w-full">
              <img
                src={settingIcon.src}
                alt="setting icon"
                className="w-11 text-sm hover:bg-details px-3 py-3 rounded-md"
              />
            </div>
          </div>
        </div>
        <div className={`flex border-r  border-details flex-col overflow-hidden transition-discrete transition-all gap-1 ${IDEActiveSection === 'Code' ? 'w-52  px-5' : 'w-0 px-0'}`}>
          <div className="w-full flex mt-3  justify-between items-center">
            <p className="pointer-events-none">Portfolio</p>
            <img
              src={menudotsIcon.src}
              alt="menu dots icon"
              className="w-11 text-sm hover:bg-details px-3 py-1 rounded-md"
            />
          </div>
          <ul className="text-md font-poppins text-sm mt-1.5">
            <li className="py-0.5">
              <div
                id="exp"
                className=" transform w-full mr-1.5 hover:text-white cursor-pointer"
              >
                <p className="inline-block">{">"} experience</p>
              </div>
              <ol className="ml-4 " id="expSub">
                <li
                  className={`py-0.5 hover:text-white cursor-pointer transition-all ${
                    ActiveSection === "Freelance.json"
                      ? "bg-primary text-white rounded-sm px-2 min-w-full py-1.5 my-1.5 hover:bg-primary"
                      : ""
                  }`}
                  onClick={() => setActiveSection("Freelance.json")}
                >
                  <p>Freelance.json</p>
                </li>
                <li
                  className={`py-0.5 hover:text-white cursor-pointer transition-all ${
                    ActiveSection === "IGD_S.A.S.json"
                      ? "bg-primary text-white rounded-sm px-2 min-w-full py-1.5 my-1.5 hover:bg-primary"
                      : ""
                  }`}
                  onClick={() => setActiveSection("IGD_S.A.S.json")}
                >
                  <p>IGD_S.A.S.json</p>
                </li>
              </ol>
            </li>
            <li className="py-0.5">
              <div
                id="src"
                className=" transform w-full mr-1.5 hover:text-white cursor-pointer"
              >
                <p className="inline-block">{">"} src</p>
              </div>
              <ol className="ml-4 " id="srcSub">
                <li
                  className={`py-0.5 hover:text-white cursor-pointer transition-all ${
                    ActiveSection === "Exp.tsx"
                      ? "bg-primary text-white rounded-sm px-2 min-w-full py-1.5 my-1.5 hover:bg-primary"
                      : ""
                  }`}
                  onClick={() => setActiveSection("Exp.tsx")}
                >
                  <p>Exp.tsx</p>
                </li>
                <li
                  className={`py-0.5 hover:text-white cursor-pointer transition-all ${
                    ActiveSection === "About.astro"
                      ? "bg-primary text-white rounded-sm px-2 min-w-full py-1.5 my-1.5 hover:bg-primary"
                      : ""
                  }`}
                  onClick={() => setActiveSection("About.astro")}
                >
                  <p>About.astro</p>
                </li>
              </ol>
            </li>

            <li
              className={`py-0.5 hover:text-white cursor-pointer transition-all ${
                ActiveSection === "README.md"
                  ? "bg-details rounded-sm px-2 min-w-full py-1.5 my-1.5 hover:bg-primary"
                  : ""
              }`}
              onClick={() => setActiveSection("README.md")}
            >
              <p>README.md</p>
            </li>
          </ul>
        </div>
        <div className="w-full h-[77dvh] justify-between flex flex-col py-2">
          <div className={`flex gap-3 w-full px-5 border-b pb-2  border-details min-h-10 ${recentSections.length === 0 || IDEActiveSection !== 'Code' ? 'hidden' : ''}`}>
            {recentSections.map(
              (section, index) =>
                section && (
                  <div
                    key={index}
                    className={`${
                      ActiveSection === section ? " bg-primary text-white" : ""
                    } text-sm w-32 items-center hover:text-white flex justify-between bg-details rounded-sm px-2 py-1.5 my-1.5 border border-details cursor-pointer transition-all`}
                    onClick={() => setActiveSection(section)}
                  >
                    <p className="pb-0.5">{section}</p>
                    <button
                      className="h-full px-2 pb-1.5"
                      onClick={() => removeRecentSection(section)}
                    >
                      x
                    </button>
                  </div>
                )
            )}
          </div>
          <section className={`w-full text-sm overflow-hidden overflow-y-scroll h-[75%] px-5 py-2 ${IDEActiveSection === 'Code' ? 'h-[75%]' : 'h-full'}`}>
            {
              IDEActiveSection === 'Code' && renderActiveSection()
            }
            {
              IDEActiveSection === 'Search' && <Search />
            }
            {
              IDEActiveSection === 'designs' && <Projects />
            }
          </section>
          <section className={`w-full text-sm overflow-hidden overflow-y-scroll transition-all px-5  pt-0  border border-t border-details ${IDEActiveSection === 'Code' ? 'h-[25%] py-2' : 'h-0 py-0'}`}>
            <div className="w-full text-sm flex border-b border-details justify-between px-8 py-4">
              <div className="flex gap-5">
                <p className="relative after:absolute after:w-1/2 after:h-0.5 after:bg-text-details flex items-center justify-center after:-bottom-0.5 after:rounded-md">
                  Terminal
                </p>
                <p className="relative flex items-center justify-center">
                  Output
                </p>
              </div>
              <button className="text-lg">x</button>
            </div>
            <p className="text-sm ml-8 mt-3">C:\Users\ruzon{">"}</p>
          </section>
        </div>
      </aside>
    </div>
  );
}
