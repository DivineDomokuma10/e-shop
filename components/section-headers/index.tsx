interface Props {
  title: string;
  subTitle: string;
  showMore: boolean;
}

const SectionHeaders = ({ showMore, subTitle, title }: Props) => {
  return (
    <section className="w-full flex items-end justify-between">
      <div className="flex flex-col space-y-2">
        <h5 className="text-sm font-extrabold text-[#ff6f61]">{subTitle}</h5>

        <h3 className="text-base text-[#333] font-medium md:text-2xl">
          {title}
        </h3>
      </div>

      {showMore && (
        <button className="w-fit px-3 py-2 text-xs text-[#222] shadow-md font-normal transition bg-[#ff6f61] rounded-[5px] hover:scale-105">
          See more
        </button>
      )}
    </section>
  );
};

export default SectionHeaders;
