import Banner from "@/components/AllSection/Home/Banner";
import Counter from "@/components/AllSection/Home/Counter";
import Courses from "@/components/AllSection/Home/Courses";
import InstructorSide from "@/components/AllSection/Home/InstructorSide";
import SimpleSide from "@/components/AllSection/Home/SimpleSide";
import WhatYouGet from "@/components/AllSection/Home/WhatYouGet";
import WhyUs from "@/components/AllSection/Home/WhyUs";

const Home = () => {
  return (
    <main>
      <Banner />
      <Courses />
      <WhyUs />
      <Counter />
      <WhatYouGet />
      <SimpleSide />
      <InstructorSide />
    </main>
  );
};

export default Home;
