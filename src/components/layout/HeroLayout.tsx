import { ReactNode } from "react";
import Header from "../menuBars/Header";
import { useLocation } from "react-router-dom";

interface HeroProps {
  children: ReactNode;
}

const HeroLayout = ({ children }: HeroProps) => {
  const location = useLocation();

  const shop = location.pathname === "/shop";
  const home = location.pathname === "/";
  return (
    <div
      className={`${
        home
          ? `bg-[url('/HeroImage.png')]`
          : shop
          ? `bg-[url('/AboutImage.png')]`
          : "bg-fadedBackground"
      } sm:bg-cover sm:bg-center `}
    >
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default HeroLayout;
