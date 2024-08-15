import Image from "next/image";
import logo from "@/assets/images/logo-white.png";
import Link from "next/link";
import { footerData } from "@/assets/data/footerData";
import { FaXTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import React from "react";

const Footer = async () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-10 relative bg-footer">
      <div className="container mx-auto px-4 flex justify-center items-center"></div>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-6 items-start mt-10">
          <div className="col-span-2">
            <Link href={"/"}>
              <Image src={logo} alt="logo" width={150} height={200} />
            </Link>
            <p className="mt-4 text-white text-sm lg:w-[80%]">
              আইটি ইন্সটিটিউট বাংলাদেশের একটি অন্যতম সনামধন্য আইটি ট্রেনিং
              ইনস্টিটিউট। যেখানে আমরা বিভিন্ন বিষয়ের উপর আইটি প্রশিক্ষণ দিয়ে
              আসছি। তাদের ক্যারিয়ার গড়ার লক্ষে আমাদের অভিজ্ঞ মেন্টরগণ কাজ করে
              আসছে। তাই আমাদের শিক্ষার্থীরা তাদের পছন্দের কোর্সটি করে
              ফ্রীলান্সিং এবং বিভিন্ন দেশি-বিদেশি কোম্পানিগুলো জব করছেন।
            </p>
            <div className="mt-10 lg:mt-0">
              <div className="flex items-center gap-6 mt-6 justify-start text-white">
                <Link
                  href={"https://www.linkedin.com/company/vitasoft-solution"}
                  target="_blank"
                >
                  <FaLinkedinIn className="text-4xl hover:scale-110 duration-300" />
                </Link>
                <Link
                  href={"https://www.facebook.com/vitasoft.solutions"}
                  target="_blank"
                >
                  <FaFacebookF className="text-4xl hover:scale-110 duration-300  " />
                </Link>
                <Link
                  href={"https://www.instagram.com/vitasoft_solutions/"}
                  target="_blank"
                >
                  <FaInstagram className="text-4xl hover:scale-110 duration-300" />
                </Link>
                <Link href={"https://x.com/vitasoft_"}>
                  <FaXTwitter className="text-4xl hover:scale-110 duration-300" />
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 col-span-4 mt-10 lg:mt-0 lg:ml-10">
            {footerData?.map((item) => (
              <div key={item.id}>
                <h3 className="text-2xl font-bold text-white">{item?.title}</h3>
                <ul className="mt-4">
                  {item?.links.map((link) => (
                    <li key={link.to} className="mt-2">
                      <Link href={link.to}>
                        {link.icon ? (
                          <div className="flex items-center gap-2">
                            {React.createElement(link.icon, {
                              className: "text-lg text-white",
                            })}
                            <span className="text-white hover:underline text-sm">
                              {link.name}
                            </span>
                          </div>
                        ) : (
                          <span className="text-white hover:underline text-sm">
                            {link.name}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-white mt-20 mb-10"></div>
      <div className="container mx-auto px-4 lg:flex justify-between items-center">
        <p className="text-white text-sm mb-10 lg:mb-0">
          © {currentYear} All Rights Reserved by{" "}
          <span className="font-bold">Futures Devs</span>
        </p>
        <div className="flex lg:items-center gap-10">
          <Link href={"/pages/privacy-policy"}>
            <p className="text-white hover:underline text-sm">Privacy Policy</p>
          </Link>
          <Link href={"/pages/terms-and-conditions"}>
            <p className="text-white hover:underline text-sm">
              Terms and Conditions
            </p>
          </Link>
          <Link href={"/pages/terms-and-conditions"}>
            <p className="text-white hover:underline text-sm">Support</p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
