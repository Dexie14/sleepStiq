import google from "@/assets/googleLogo.png";
import forbes from "@/assets/forbesLogo.png";
import bloomberg from "@/assets/bloomberg.png";
import sleepReview from "@/assets/sleepLogo.png";
import influencive from "@/assets/influencive.png";

const LogoCard = () => {
  return (
    <div>
      <aside className=" h-[121px] rounded-[2px]  sm:w-[89%] sm:justify-self-end -mt-[63px] shadow-custom grid place-content-center items-center px-5 sm:px-16 grid-cols-3 sm:grid-cols-5 gap-10 bg-white">
        <img src={google} alt="google" />
        <img src={forbes} alt="forbes" />
        <img src={bloomberg} alt="bloomberg" />
        <img src={sleepReview} alt="sleepReview" />
        <img src={influencive} alt="influencive" />
      </aside>
    </div>
  );
};

export default LogoCard;
