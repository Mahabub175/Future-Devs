import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { CgMediaLive } from "react-icons/cg";
import { LuLayoutDashboard } from "react-icons/lu";

const SingleCourseBanner = ({ course }) => {
  return (
    <section className="bg-primaryLight/40 py-32">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl lg:text-5xl font-bold">{course.title}</h1>
            <p className="text-textColorDark mt-6">{course?.description}</p>
            <div className="flex items-center gap-4 mt-10">
              <button className="bg-primaryLight flex items-center gap-4 justify-center text-primary font-bold px-10 py-3 rounded-md hover:bg-transparent duration-300 hover:text-primary border-2 border-primary">
                <CgMediaLive className="text-xl" />
                {course?.class}
              </button>
              <button className="bg-primaryLight flex items-center gap-4 justify-center text-primary font-bold px-10 py-3 rounded-md hover:bg-transparent duration-300 hover:text-primary border-2 border-primary">
                <LuLayoutDashboard className="text-xl" />
                {course?.project}
              </button>
            </div>
          </div>
          <div>
            <Image
              src={course?.courseBanner}
              alt={course?.title}
              width={500}
              height={500}
            />
            <div className="mt-10 flex items-center gap-4">
              <p className="text-4xl font-bold">{course?.discount}</p>
              {course?.discount && (
                <p className="text-xl font-bold text-red-500 line-through">
                  {course?.price}
                </p>
              )}
            </div>
            <Link href={"/"}>
              <button className="bg-primary flex  items-center gap-4 justify-center text-white w-full mt-10 font-bold px-10 py-3 rounded-md hover:bg-transparent duration-300 hover:text-primary border-2 border-primary">
                কোর্সে এখনই ভর্তি হোন
                <FaArrowRightLong className="text-xl" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleCourseBanner;
