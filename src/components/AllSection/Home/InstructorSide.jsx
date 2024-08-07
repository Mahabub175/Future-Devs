import banner from "@/assets/images/home/instructor.png";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

const InstructorSide = () => {
  return (
    <section className="bg-primaryLight/40 py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-20 my-10 lg:my-20">
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
            কোর্স ইন্সট্রাক্টর
          </h1>
          <p className="text-black/80">
            আপনি কি নিজের ক্যারিয়ার নিয়ে চিন্তিত? জব অথবা ফ্রিল্যান্সিং এর জন্য
            কোন কোর্সটি করবেন, সিদ্ধান্ত নিতে পারছেন না? জয়েন করুন আমাদের ফ্রি
            সেমিনারে। বিষয়ভিত্তিক এই সেমিনারগুলোতে প্রতিটি কোর্স এবং ক্যারিয়ার
            সম্ভাবনা সম্পর্কে জানতে পারবেন। তাছাড়া সেমিনারে উপস্থিত এক্সপার্ট
            কাউন্সেলরের সাথে কথা বলে আপনি সহজেই উপযুক্ত কোর্স বেছে নেওয়ার
            সিদ্ধান্ত নিতে পারবেন।
          </p>
          <div className="mt-10 text-[#3B3B3B]">
            <p className="text-3xl font-bold mb-2">Shaapir Prio</p>
            <p>Assistant Director</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSide;
