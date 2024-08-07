import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import banner1 from "@/assets/images/home/banner1.png";
import banner2 from "@/assets/images/home/banner2.png";
import banner3 from "@/assets/images/home/banner3.png";
import banner4 from "@/assets/images/home/banner4.png";
import banner5 from "@/assets/images/home/banner5.png";
import banner6 from "@/assets/images/home/banner6.png";
import banner7 from "@/assets/images/home/banner7.png";
import banner8 from "@/assets/images/home/banner8.png";
import banner9 from "@/assets/images/home/banner9.png";
import banner10 from "@/assets/images/home/banner10.png";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="bg-primary py-20">
      <div className="container mx-auto mt-10 lg:mt-20 flex flex-col lg:flex-row justify-between items-center px-4 gap-10">
        <div className="lg:w-4/6">
          <h1 className="text-3xl lg:text-5xl font-bold text-white flex flex-col gap-3 mb-8">
            নিজেকে কাজে দক্ষ করুন, <span>সুন্দর ক্যারিয়ার গড়ুন।</span>
          </h1>
          <p className="text-textColor">
            অভিজ্ঞ মেন্টর ও আপডেটেড কারিকুলামে সাজানো আইটি ইন্সটিটিউটের অফলাইন,
            অনলাইন এবং রেকর্ডেড কোর্সগুলো হতে পারে আপনার ক্যারিয়ার গড়ার হাতিয়ার।
            তাই আমাদের ১৫+ ক্যাটাগরি থেকে বেছে নিন আপনার পছন্দের কোর্সটি এবং
            ভর্তি হয়ে যান আপনার পছন্দের সময়ে।
          </p>
          <div className="flex items-center gap-10 mt-10">
            <Link href={"/"}>
              <button className="bg-yellow text-black font-bold px-10 py-4 rounded-md hover:bg-transparent duration-300 hover:text-yellow border-2 border-yellow">
                কোর্সগুলো দেখুন
              </button>
            </Link>
            <Link href={"/"}>
              <button className="flex items-center bg-transparent text-primaryLight font-bold px-10 py-4 rounded-md hover:bg-primaryLight duration-300 hover:text-primary border-2 border-primaryLight group">
                ফ্রিতে শিখুন
                <FaLongArrowAltRight className="ml-2 text-yellow group-hover:translate-x-2 duration-300 group-hover:text-primary" />
              </button>
            </Link>
          </div>
          <div className="mt-10 flex gap-6 items-center">
            <div className="flex">
              <Image
                src={banner6}
                alt="banner6"
                width={40}
                height={40}
                className="-mr-3"
              />
              <Image
                src={banner7}
                alt="banner6"
                width={40}
                height={40}
                className="-mr-3"
              />
              <Image src={banner8} alt="banner6" width={40} height={40} />
            </div>
            <p className="text-textColor">৪০০+ খুশি ছাত্রছাত্রী</p>
          </div>
        </div>
        <div>
          <div className="lg:flex items-center gap-10 relative">
            <Image src={banner1} alt="banner1" width={300} height={200} />
            <Image
              src={banner5}
              alt="banner5"
              width={20}
              height={20}
              className="absolute top-0 left-[45%]"
            />
            <Image src={banner9} alt="banner9" width={300} height={200} />
          </div>
          <div className="lg:flex items-center gap-10 relative mt-10">
            <Image src={banner10} alt="banner10" width={300} height={200} />
            <Image
              src={banner3}
              alt="banner3"
              width={20}
              height={20}
              className="absolute top-0 right-[2%]"
            />

            <Image src={banner2} alt="banner2" width={300} height={200} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
