import Banner from "@/components/AllSection/Home/Banner";
import Counter from "@/components/AllSection/Home/Counter";
import Courses from "@/components/AllSection/Home/Courses";
import WhyUs from "@/components/AllSection/Home/WhyUs";

const Home = () => {
  return (
    <main>
      <Banner />
      <Courses />
      <WhyUs />
      <Counter />
    </main>
  );
};

export default Home;
