import sleepstiqlogo from "@/assets/sleepstiqLogo.svg";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const getLinkClass = (path: string) => {
    const isActive = location.pathname === path;
    return `
        font-bold ${isActive ? "font-extrabold" : "font-normal"}
      `;
  };

  const [open, setOpen] = useState(false);
  const showNav = () => setOpen(!open);

  return (
    <section>
      <div className="flex items-center gap-40 w-[80%] py-5 mx-auto">
        <img src={sleepstiqlogo} alt="sleepstiqlogo" />
        <aside className="text-lg items-center gap-x-16 md:flex hidden">
          <Link to="/" className={`${getLinkClass("/")}`}>
            Home
          </Link>
          <Link to="/shop#about" className={getLinkClass("#about")}>
            About
          </Link>
          <Link to="/shop" className={`${getLinkClass("/shop")} `}>
            Shop
          </Link>
          <Link to="/faqs" className={getLinkClass("/faqs")}>
            FAQs
          </Link>
        </aside>
        {!open ? (
          <button className="md:hidden cursor-pointer" onClick={showNav}>
            <FaBars height={15} />
          </button>
        ) : (
          <button className="md:hidden cursor-pointer" onClick={showNav}>
            <FaTimes />
          </button>
        )}
      </div>
      {open && (
        <div
          className="flex flex-col justify-center mx-auto left-0 right-0 items-center w-[100%] absolute top-[20%] bg-primary text-white p-8 "
          style={{
            transform: open ? "translateY(0)" : "translateY(100%)",
            transition: "transform 0.95s ease-in-out",
          }}
        >
          <nav className="flex flex-col gap-14 justify-between items-center w-full mb-[50px]">
            <Link to="/" onClick={showNav} className={`${getLinkClass("/")}`}>
              Home
            </Link>
            <Link
              to="#about"
              onClick={showNav}
              className={getLinkClass("#about")}
            >
              About
            </Link>
            <Link
              to="/shop"
              onClick={showNav}
              className={`${getLinkClass("/shop")} `}
            >
              Shop
            </Link>
            <Link
              to="/faqs"
              onClick={showNav}
              className={getLinkClass("/faqs")}
            >
              FAQs
            </Link>
          </nav>
        </div>
      )}
    </section>
  );
};

export default Header;
