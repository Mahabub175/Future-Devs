import { whatYouGetData } from "@/assets/data/homeData";
import Image from "next/image";

const WhatYouGet = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="lg:w-4/6 mx-auto text-center">
          <h2 className="text-2xl lg:text-4xl font-bold text-center mb-4 ">
            কি কি পাচ্ছেন লাইভ কোর্সে
          </h2>
          <p className="text-black/60 font-semibold">
            দেখে নিন কি কি পাচ্ছেন লাইভ কোর্সে জয়েন করলে
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 bg-primary rounded-xl p-10 gap-10 lg:gap-0 lg:p-20">
          {whatYouGetData?.map((item, index) => (
            <div
              key={item?.id}
              className={`duration-300 flex flex-col justify-center items-center text-center px-5 text-primaryLight ${
                index < 3 ? "lg:border-b lg:pb-10" : ""
              } ${index < 2 ? "lg:border-r lg:pr-10" : ""} ${
                index === 3 || index === 4 ? "lg:border-r lg:pr-10" : ""
              } ${index > 2 ? "lg:pt-5" : ""}`}
            >
              <Image
                src={item?.image}
                alt={item?.title}
                width={80}
                height={80}
              />
              <h3 className="text-lg font-bold mt-6 mb-3">{item?.title}</h3>
              <p className="text-md text-textColor">{item?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
