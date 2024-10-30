import sleepFooterLogo from "@/assets/sleepFooterLogo.svg";
import facebook from "@/assets/facebook.png";
import twitter from "@/assets/twitter.png";
import linkedin from "@/assets/linkedin.png";
import googleIcon from "@/assets/googleIcon.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[url('/footerImage.png')] md:px-28 px-5 py-7 bg-primary">
      <div className=" w-[150px] mx-auto ">
        <img
          src={sleepFooterLogo}
          alt="sleepFooterLogo"
          className="w-full h-full"
        />
      </div>
      <section className="pt-12 flex md:flex-row flex-col space-y-8 md:space-y-0 justify-between">
        <div className="flex gap-12  md:w-[31%]">
          <aside className="text-footerText ">
            <h2 className="mb-5 text-white font-semibold">Company</h2>
            <div className="flex flex-col space-y-2 text-sm">
              <Link to="/shop" className="cursor-pointer">
                About
              </Link>
              <p>Blog</p>
              <p>Contact</p>
              <p>Jobs</p>
            </div>
          </aside>
          <aside className="text-footerText ">
            <h2 className="mb-5 text-white font-semibold">Contact</h2>
            <div className="flex flex-col space-y-2 text-sm">
              <p>Phone </p>
              <p className="text-white  font-bold">+234 708 507 3128</p>
              <p>Address</p>
              <p className="text-white  font-bold">
                16, Ogindipe Close, Upston Close
              </p>
            </div>
          </aside>
        </div>
        <div className="md:w-[33%]">
          <h2 className=" text-white font-semibold">CONSUMER ADVISORY</h2>
          <p className="my-5 text-white text-sm">
            These statements have not been evaluated by the Food and Drug
            Administration. This product is not intended to diagnose, treat,
            cure, or prevent any disease. This product should be used only as
            directed on the label. All trademarks and copyrights are property of
            their respective owners and not affiliated with nor do they endorse
            this product. Results may vary.
          </p>
          <p className="text-white text-sm">
            By using our website or product, you agree to follow our{" "}
            <span className="text-[#8FE2FF]">terms of service.</span>
          </p>
        </div>
        <div className="md:w-[30%] flex gap-11">
          <hr className="h-[210px] border border-[#5D6544]" />
          <div>
            <h2 className=" text-white font-semibold"> Get in Touch</h2>
            <p className="my-5 text-footerText text-sm">
              Feel free to get in touch with us vai email
            </p>
            <h2 className="text-white text-xl font-bold">
              hello@sleepstiq.com
            </h2>
            <div className="my-10 flex gap-3 items-center">
              <img src={facebook} alt="facebook" />
              <img src={twitter} alt="twitter" />
              <img src={googleIcon} alt="logo" />
              <img src={linkedin} alt="logo" />
            </div>
            <p className="text-sm text-footerText mt-5 ">
              © 2020@sleepstiq. All Rights Reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
