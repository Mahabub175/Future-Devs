import { courseData } from "@/assets/data/homeData";
import Image from "next/image";
import { MdPeopleAlt } from "react-icons/md";
import { FaRegFileLines } from "react-icons/fa6";
import { GiNetworkBars } from "react-icons/gi";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

const Courses = () => {
  return (
    <section className="bg-primaryLight/40 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl lg:text-4xl font-bold text-center mb-10">
          আমাদের কোর্সসমুহ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courseData?.map((item) => (
            <div
              key={item?.id}
              className="border border-textColor rounded-xl bg-white relative"
            >
              <div className="p-4">
                <Image
                  src={item?.image}
                  alt={item?.title}
                  width={500}
                  height={400}
                  className="mx-auto"
                />
                {item?.live && (
                  <div className="flex items-center gap-4 bg-primary p-2 rounded-md text-white font-bold justify-center absolute top-8 left-8 text-sm">
                    <p>অনলাইন লাইভ</p>
                    <span className="bg-red-500 size-4 rounded-full"></span>
                  </div>
                )}
                <div className="p-2">
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center text-primary">
                      <MdPeopleAlt />
                      <p className="ml-1 text-sm">{item?.seat} টি সিট বাকি</p>
                    </div>
                    <div className="flex items-center text-primary">
                      <FaRegFileLines />
                      <p className="ml-1 text-sm">{item?.lesson} লেসন</p>
                    </div>
                    <div className="flex items-center text-primary">
                      <GiNetworkBars />
                      <p className="ml-1 text-sm">{item?.level}</p>
                    </div>
                  </div>
                  <div className="my-6 h-[1px] bg-primary/40"></div>
                  <h2 className="text-2xl font-extrabold">{item?.title}</h2>
                  <h3 className="text-xl mt-3 font-extrabold">{item?.price}</h3>
                  <Link href={`/courses/${item?.id}`}>
                    <button className="flex items-center bg-primary text-primaryLight font-bold px-10 py-4 rounded-md hover:bg-primaryLight duration-300 hover:text-primary border-2 border-primary group mt-10 w-full justify-center">
                      ফ্রিতে শিখুন
                      <FaLongArrowAltRight className="ml-2 text-white group-hover:translate-x-2 duration-300 group-hover:text-primary text-xl" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link href={"/"} className="flex justify-center">
          <button className="flex items-center bg-white text-primary font-bold px-10 py-4 rounded-md hover:bg-primary duration-300 hover:text-primaryLight border-2 border-primary group mt-10 justify-center">
            সকল কোর্স দেখুন
            <FaLongArrowAltRight className="ml-2 text-primary group-hover:text-primaryLight group-hover:translate-x-2 duration-300 text-xl" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Courses;
