"use client";
import { useEffect, useState } from "react";

import { showTimeTitle } from "./helper-function";

interface IStartTimers {
  days: number;
  hrs: number;
  mins: number;
  secs: number;
}

interface Props {
  classStyles: string;
  startTimers: [number, number, number, number];
}

const CountDown = ({ classStyles, startTimers }: Props) => {
  const [currentTimers, setCurrentTimers] = useState<IStartTimers>({
    days: startTimers[0],
    hrs: startTimers[1],
    mins: startTimers[2],
    secs: startTimers[3],
  });

  useEffect(() => {
    const onCountDown = () => {
      setInterval(() => {
        setCurrentTimers((prev) =>
          prev.secs > 0
            ? { ...prev, secs: prev.secs - 1 }
            : { ...prev, secs: 0 }
        );
      }, 1000);

      setInterval(() => {
        setCurrentTimers((prev) =>
          prev.mins > 0
            ? { ...prev, mins: prev.mins - 1 }
            : { ...prev, mins: 0 }
        );
      }, 1000 * 60);

      setInterval(() => {
        setCurrentTimers((prev) =>
          prev.hrs > 0 ? { ...prev, hrs: prev.hrs - 1 } : { ...prev, hrs: 0 }
        );
      }, 1000 * 60 * 60);

      setInterval(() => {
        setCurrentTimers((prev) =>
          prev.days > 0
            ? { ...prev, days: prev.days - 1 }
            : { ...prev, days: 0 }
        );
      }, 1000 * 60 * 60 * 24);
    };
    onCountDown();
  }, [currentTimers]);

  return (
    <section className={`flex space-x-5 ${classStyles} md:justify-center`}>
      <Timer index={1} startTime={currentTimers.days} />
      <Timer index={2} startTime={currentTimers.hrs} />
      <Timer index={3} startTime={currentTimers.mins} />
      <Timer index={4} startTime={currentTimers.secs} />
    </section>
  );
};

const Timer = ({ startTime, index }: { startTime: number; index: number }) => {
  return (
    <div
      key={`${startTime}.${index}`}
      className="w-1/4 h-full rounded-full flex flex-col justify-center text-gray-600 bg-white items-center"
    >
      <h5 className="text-xl">{startTime}</h5>

      <p className="text-[10px]">{showTimeTitle(index)}</p>
    </div>
  );
};

export default CountDown;
