import CounterNumber from "./CounterNumber";

const Counter = () => {
  return (
    <section className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-10 my-20">
      <div className="bg-primaryLight rounded-xl p-10 w-4/6 flex flex-col justify-center items-center">
        <CounterNumber end={7000} icon={"+"} />
        <h3 className="mt-3 font-bold text-2xl">জব প্লেসমেন্ট</h3>
      </div>
      <div className="bg-primaryLight rounded-xl p-10 w-4/6 flex flex-col justify-center items-center">
        <CounterNumber end={15000} icon={"+"} />
        <h3 className="mt-3 font-bold text-2xl">লার্নার</h3>
      </div>
      <div className="bg-primaryLight rounded-xl p-10 w-4/6 flex flex-col justify-center items-center">
        <CounterNumber end={90} icon={"%"} />
        <h3 className="mt-3 font-bold text-2xl">কোর্স কমপ্লিশন রেট</h3>
      </div>
    </section>
  );
};

export default Counter;
