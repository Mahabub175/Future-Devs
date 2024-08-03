import { whyUsData } from "@/assets/data/homeData";
import Image from "next/image";

const WhyUs = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="lg:w-4/6 mx-auto text-center">
          <h2 className="text-2xl lg:text-4xl font-bold text-center mb-4 ">
            কেন আমরা সবার থেকে আলাদা
          </h2>
          <p className="text-black/60 font-semibold">
            আমরা আমাদের শিক্ষার্থীদের সুন্দর ক্যারিয়ার গড়ার লক্ষে আমরা আমাদের
            কোর্স মডিউল থেকে শুরু করে জব প্লেসমেন্ট পর্যন্ত অন্যরকমভাবে
            সাজিয়েছি। যেন তারা কোর্স শেষ করার সাথে সাথে ফ্রীলান্সিং এবং
            সুনামধন্য প্রতিষ্ঠানে জব করতে পারে।
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
          {whyUsData?.map((item) => (
            <div
              key={item?.id}
              className="border-2 border-textColor rounded-xl relative hover:shadow-xl hover:border-primary duration-300"
            >
              <div className="p-4 flex gap-6 items-start">
                <Image
                  src={item?.image}
                  alt={item?.title}
                  width={80}
                  height={80}
                  className=""
                />

                <div>
                  <h3 className="text-xl font-bold mb-3">{item?.title}</h3>
                  <p className="text-md text-black/70">{item?.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
