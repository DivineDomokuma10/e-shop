import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

interface Props {
  title: string;
  subTitle: string;
}

const SectionHeaders = ({ subTitle, title }: Props) => {
  return (
    <section className="w-full flex items-end justify-between">
      <div className="flex flex-col space-y-2">
        <h5 className="text-sm font-extrabold text-[#ff6f61]">{subTitle}</h5>

        <h3 className="text-base text-gray-800 font-medium md:text-2xl">
          {title}
        </h3>
      </div>

      <Link
        href={""}
        className="flex text-sm items-center space-x-1 text-gray-800"
      >
        <p className="">View {subTitle.toLowerCase()}</p>
        <LuArrowRight className="font-medium" />
      </Link>
    </section>
  );
};

export default SectionHeaders;
