import { showTimeTitle } from "./helper-function";

interface Props {
  classStyles: string;
  startTimers: [number, number, number, number];
}

const CountDown = ({ classStyles, startTimers }: Props) => {
  return (
    <section className={`flex space-x-5 ${classStyles} md:justify-center`}>
      {startTimers.map((startTime, i) => (
        <div
          key={startTime + i}
          className="w-1/4 h-full rounded-full flex flex-col justify-center text-gray-600 bg-white items-center"
        >
          <h5 className="text-xl">{startTime}</h5>

          <p className="text-[10px]">{showTimeTitle(i)}</p>
        </div>
      ))}
    </section>
  );
};

export default CountDown;
