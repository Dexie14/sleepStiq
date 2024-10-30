import { ReactNode } from "react";
import Header from "../menuBars/Header";

interface HeroProps {
  backgroundImage?: string;
  children: ReactNode;
}

const HeroLayout = ({ backgroundImage, children }: HeroProps) => {
  return (
    <div
        // className="bg-[url('/AboutImage.png')] bg-cover bg-center"
      className={`${
        backgroundImage ? `bg-[url('/${backgroundImage}.png')]` : "bg-fadedBackground"
      } sm:bg-cover sm:bg-center `}
    >
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default HeroLayout;
