import React from "react";
import Image from "next/image";
import correct from "@/assets/images/correct.png";

const Listings = ({ data, title }) => {
  return (
    <section className="container mx-auto mt-20">
      <h2 className="text-3xl font-bold text-center">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
        {data?.map((item) => (
          <div
            key={item?.id}
            className="flex items-center gap-5 mt-2 shadow-lg p-5 rounded-x"
          >
            <Image src={correct} alt={"correct"} width={50} height={50} />
            <h3 className="text-base font-bold">{item?.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Listings;
