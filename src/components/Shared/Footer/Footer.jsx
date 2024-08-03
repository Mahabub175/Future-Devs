import Image from "next/image";
import logo from "@/assets/images/logo-white.png";
import linkedin from "@/assets/images/linkedin.png";
import facebook from "@/assets/images/facebook.png";
import insta from "@/assets/images/insta.png";
import youtube from "@/assets/images/youtube.png";
import Link from "next/link";
import { footerData } from "@/assets/data/footerData";

const Footer = () => {
  return (
    <footer className="bg-primary py-10 relative mt-44">
      <div className="container mx-auto px-4 flex justify-center items-center">
        <div
          style={{ background: "linear-gradient(to right, #fef8f8, #f3eefe)" }}
          className="px-10 lg:px-20 py-10 rounded-b-xl text-center absolute -top-20"
        >
          <p className="text-white font-bold mt-4 lg:text-2xl bg-primary px-10 lg:px-20 py-5 rounded-full">
            Unlock Your Potential with Our Professional Services
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 1 mt-20">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="logo"
            width={250}
            height={200}
            className="-translate-x-6 lg:-translate-x-10"
          />
        </Link>
        <div className="grid lg:grid-cols-4 items-start mt-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 col-span-3">
            {footerData?.map((item) => (
              <div key={item.id}>
                <h3 className="text-2xl font-bold text-white ">{item.title}</h3>
                <ul className="mt-4">
                  {item.links.map((link) => (
                    <li key={link.to} className="mt-2">
                      <Link href={link.to}>
                        <span className="text-white hover:underline text-sm">
                          {link.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 lg:mt-0">
            <h3 className="text-2xl font-bold text-white">Contact Us !</h3>
            <div className="grid grid-cols-4 mt-6 justify-start">
              <Link href={""}>
                <Image
                  src={linkedin}
                  alt="linkedin"
                  width={40}
                  height={40}
                  className="hover:scale-110 duration-300"
                />
              </Link>
              <Link href={""}>
                <Image
                  src={facebook}
                  alt="facebook"
                  width={40}
                  height={40}
                  className="hover:scale-110 duration-300 -ml-5"
                />
              </Link>
              <Link href={""}>
                <Image
                  src={insta}
                  alt="insta"
                  width={40}
                  height={40}
                  className="hover:scale-110 duration-300 -ml-10"
                />
              </Link>
              <Link href={""}>
                <Image
                  src={youtube}
                  alt="youtube"
                  width={40}
                  height={40}
                  className="hover:scale-110 duration-300 -ml-[4rem]"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-20 mb-10" />
      <div className="container mx-auto px-4 lg:flex justify-between items-center">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4 lg:gap-10">
          <Link href={""}>
            <p className="text-white hover:underline text-sm">Privacy Policy</p>
          </Link>
          <Link href={""}>
            <p className="text-white hover:underline text-sm">Terms of Use</p>
          </Link>
          <Link href={""}>
            <p className="text-white hover:underline text-sm">
              Sales and Refunds
            </p>
          </Link>
          <Link href={""}>
            <p className="text-white hover:underline text-sm">Legal</p>
          </Link>
          <Link href={""}>
            <p className="text-white hover:underline text-sm">Site Map</p>
          </Link>
        </div>
        <p className="text-white/70 text-sm mt-10 lg:mt-0">
          © 2024 All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
