"use client";

import CountUp from "react-countup";

const CounterNumber = ({ end, icon }) => {
  return (
    <div className="text-5xl font-bold flex items-center mb-1">
      <CountUp start={0} end={end} duration={2} />
      {icon}
    </div>
  );
};

export default CounterNumber;
