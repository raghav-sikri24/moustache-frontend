import StarIcon from "../../../../assets/Icons/StarIcon";
import Agoda from "../../../../assets/Images/agoda.png";
import Booking from "../../../../assets/Images/booking.png";
import Expedia from "../../../../assets/Images/expedia.png";
import goIbibo from "../../../../assets/Images/go-ibibo.png";
import Google from "../../../../assets/Images/google.png";
import mountainTrek from "../../../../assets/Images/MountainTrek.png";
import tripAdvisor from "../../../../assets/Images/trip-advisor.png";
import CustomImage from "../../../../components/Image/view";
import CustomText from "../../../../components/Text/CustomText";

export default function MainBanner() {
  const config = [
    { logo: tripAdvisor, rating: 4.5, title: "TripAdvisor" },
    { logo: Booking, rating: 4.2, title: "Booking" },
    { logo: Agoda, rating: 4.6, title: "Agoda" },
    { logo: Google, rating: 4.2, title: "Google" },
    { logo: goIbibo, rating: 4.0, title: "GoIbibo" },
    { logo: Expedia, rating: 4.8, title: "Expedia" },
  ];

  return (
    <div className="relative h-[90dvh] w-full">
      <CustomImage
        className="absolute inset-0 object-cover brightness-[0.8]"
        src={mountainTrek}
        alt="Mountain Trek"
        height="100%"
        width="100%"
        objectFit="contain"
      />
      <div className="absolute inset-x-0 top-[15%] flex flex-col gap-6 items-center justify-center">
        <div className="w-[60%] flex flex-row justify-between">
          {config?.map((item, i) => (
            <div key={i} className="flex flex-row gap-1 items-center">
              <CustomImage
                src={item.logo}
                alt={item.logo}
                h={"32px"}
                w={"32px"}
              />
              <div className="flex flex-col">
                <CustomText
                  stylearr={[16, 18, 500]}
                  color={"white.absolute"}
                  className="font-outfit"
                >
                  {item.title}
                </CustomText>
                <div className="flex flex-row items-center">
                  <StarIcon />
                  <CustomText stylearr={[16, 18, 500]} color={"#FFDD03"}>
                    {item.rating}
                  </CustomText>
                </div>
              </div>
            </div>
          ))}
        </div>
        <CustomText
          stylearr={[64, 72, 600]}
          className="text-center px-4 w-[80%]"
          color={"white.absolute"}
        >
          Discover The Magic In Every Destination With Us
        </CustomText>
      </div>
      <div className="absolute inset-x-0 bottom-[15%] flex flex-col items-center">
        <div className="relative w-[850px]">
          <div className="flex mx-auto gap-4 w-[600px] rounded-full p-2 relative z-10 mb-[-20px] overflow-hidden">
            <div
              className="absolute inset-0 blur-lg"
              style={{
                background: `url(${mountainTrek})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                filter: "brightness(0.9)",
                height: "90vh",
                transform: "translateY(-85%)",
                mixBlendMode: "multiply",
              }}
            />
            <div className="bg-white/10 flex flex-row bg-white-absolute w-full rounded-full backdrop-blur-md z-20 relative">
              <button className="flex items-center gap-2 px-6 py-2 rounded-full bg-white text-black">
                <span>🏨</span>
                <span>Hostel</span>
              </button>
              <button className="flex items-center gap-2 px-6 py-2 rounded-full text-white hover:bg-white/10">
                <span>🛏️</span>
                <span>Luxuria</span>
              </button>
              <button className="flex items-center gap-2 px-6 py-2 rounded-full text-white hover:bg-white/10">
                <span>🥂</span>
                <span>Insignia</span>
              </button>
              <button className="flex items-center gap-2 px-6 py-2 rounded-full text-white hover:bg-white/10">
                <span>🏠</span>
                <span>Select</span>
              </button>
            </div>
          </div>
          <div className="bg-white-absolute w-[850px] rounded-lg p-4 pt-8 flex gap-4 items-center">
            <div className="flex flex-col">
              <label className="text-sm text-gray-600">Where</label>
              <input
                type="text"
                placeholder="Search destinations"
                className="border-none focus:ring-0 text-base"
              />
            </div>
            <div className="w-px h-8 bg-gray-300" />
            <div className="flex flex-col">
              <label className="text-sm text-gray-600">Check in</label>
              <input
                type="text"
                placeholder="Add dates"
                className="border-none focus:ring-0 text-base"
              />
            </div>
            <div className="w-px h-8 bg-gray-300" />
            <div className="flex flex-col">
              <label className="text-sm text-gray-600">Check out</label>
              <input
                type="text"
                placeholder="Add dates"
                className="border-none focus:ring-0 text-base"
              />
            </div>
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
