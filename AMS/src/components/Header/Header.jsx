
import { useState } from "react";
import { Link } from "react-router-dom";
let Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { id: 1, text: "ABOUT_ME", link: "#about" },
    { id: 2, text: "EDUCATION", link: "#education" },
    { id: 3, text: "SKILLS", link: "#skills" },
    { id: 4, text: "PROJECTS", link: "#projects" },
    { id: 5, text: "INTERNSHIP", link: "#internship" },
    { id: 6, text: "CONTACT_ME", link: "#contact" },
  ];

  return (
    <header className="shadow sticky z-50 top-0 px-4 bg-white md:px-4 w-full">
      <nav className="flex flex-wrap justify-between items-center h-[70px] lg:px-10">
        <div>
        <Link to="/">
            <img src="./logo/logo.png" alt="Logo" className="h-10 md:h-12" />
          </Link>
        </div>
        <ul className="hidden md:flex md:flex-wrap text-[12px] md:text-[14px] lg:text-lg">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                className="py-2 pr-4 pl-3 duration-200 font-bold cursor-pointer text-orange-600"
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden lg:block">
          <Link
            to="https://github.com/ARJU7500"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 border-solid border-2 border-orange-600 hover:bg-orange-600 hover:text-white focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
          >
            Github
          </Link>
          <Link
            to="https://www.linkedin.com/in/arjunegi?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BysJqComQTvWxniErp%2FeC1w%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-orange-600 hover:bg-white hover:text-orange-600 hover: border-solid border-2 border-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
          >
            Linkedin
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="border-0">
            <h1 className="text-4xl text-orange-600" id="icon">
              &#8801;
            </h1>
          </button>
        </div>
      </nav>
      <div id="responsive" className={isMenuOpen ? "block" : "hidden"}>
        <ul className="bg-orange-600 h-[670px] py-2 text-center">
          {navItems.map((item) => (
            <>
              <button key={item.id} onClick={toggleMenu} className="border-0 ">
                <a
                  href={item.link}
                  className=" p-3 font-bold cursor-pointer text-white flex flex-col"
                >
                  {item.text}
                </a>
              </button>
              <hr className="h-0.5 bg-white" />
            </>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
