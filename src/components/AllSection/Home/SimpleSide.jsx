import banner from "@/assets/images/home/seminar.png";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

const SimpleSide = () => {
  return (
    <section className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-10 my-10 lg:my-20">
      <div>
        <Image
          src={banner}
          alt="banner10"
          width={600}
          height={200}
          className="rounded-xl"
        />
      </div>
      <div className="lg:w-3/6">
        <h1 className="text-3xl lg:text-5xl font-bold flex flex-col gap-3 mb-8">
          অংশ নিন ফ্রি সেমিনারে
        </h1>
        <p className="text-black/80">
          অভিজ্ঞ মেন্টর ও আপডেটেড কারিকুলামে সাজানো আইটি ইন্সটিটিউটের অফলাইন,
          অনলাইন এবং রেকর্ডেড কোর্সগুলো হতে পারে আপনার ক্যারিয়ার গড়ার হাতিয়ার।
          তাই আমাদের ১৫+ ক্যাটাগরি থেকে বেছে নিন আপনার পছন্দের কোর্সটি এবং ভর্তি
          হয়ে যান আপনার পছন্দের সময়ে।
        </p>
        <div className="flex items-center gap-10 mt-10">
          <Link href={"/"}>
            <button className="flex items-center bg-yellow font-bold px-10 py-4 rounded-md hover:bg-primaryLight duration-300 hover:text-primary border-2 border-yellow group">
              ফ্রিতে শিখুন
              <FaLongArrowAltRight className="ml-2 group-hover:translate-x-2 duration-300 group-hover:text-primary" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SimpleSide;
