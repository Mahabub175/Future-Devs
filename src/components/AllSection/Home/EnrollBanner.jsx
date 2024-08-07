import banner from "@/assets/images/home/smallBanner.png";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

const EnrollBanner = () => {
  return (
    <section className="bg-primary py-[1px] relative">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-20 my-10 lg:my-20">
        <div className="lg:w-3/6">
          <h1 className="text-3xl lg:text-5xl text-white font-bold flex flex-col gap-3 mb-8">
            স্কিল শেখার মাধ্যমে বদলে ফেলুন নিজের ভবিষ্যৎ
          </h1>

          <Link href={"/"}>
            <button className="flex items-center bg-yellow font-bold px-10 py-4 rounded-md hover:bg-primaryLight duration-300 hover:text-primary border-2 border-yellow group">
              ফ্রিতে শিখুন
              <FaLongArrowAltRight className="ml-2 group-hover:translate-x-2 duration-300 group-hover:text-primary" />
            </button>
          </Link>
        </div>
        <div>
          <Image
            src={banner}
            alt="banner10"
            width={500}
            height={200}
            className="rounded-xl lg:absolute lg:-top-[5.2rem] lg:right-[10%]"
          />
        </div>
      </div>
    </section>
  );
};

export default EnrollBanner;
