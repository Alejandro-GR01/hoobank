import { quotes } from "../assets";

const FeedBackCard = ({ content, name, title, img }) => (
  <div
    className={`flex  w-[370px] justify-between flex-col px-10 py-12 rounded-[20px]   feedback-card  `}
  >
    <img
      src={quotes}
      alt="double_quotes"
      className="w-[42px] h-[27px] object-container
      "
    />
    <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">
      {content}
    </p>

    <div className="flex flex-row">
      {img && (
        <img
          src={img}
          alt="client"
          className="w-[48px] h-[48px] rounded-full"
        />
      )}
      <div className="flex flex-col ml-4">
        <h3 className="font-poppins font-semibold text-[20px] leading-[32px] text-white ">
          {name}
        </h3>
        <h3 className="font-poppins font-normal text-[16px] leading-[24px] text-white opacity-60">
          {title}
        </h3>
      </div>
    </div>
  </div>
);

export default FeedBackCard;
