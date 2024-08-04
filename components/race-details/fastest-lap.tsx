import Image from "next/image";
import NumberTicker from "../magicui/number-ticker";
import { teamColors } from "@/constants";
import { convertNationalityToCountryCode } from "@/utils";
import { BiTimer } from "react-icons/bi";
import { FaFlagCheckered } from "react-icons/fa";
import { IoSpeedometerOutline } from "react-icons/io5";

export const FastestLap = () => {
  const teamColor = teamColors["red_bull"];
  const countryCode = convertNationalityToCountryCode("British");
  const gradientColor = `linear-gradient(to top left, ${teamColor.from}, ${teamColor.to})`;
  return (
    <div
      style={{
        backgroundImage: gradientColor,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="rounded-md px-4 py-3"
    >
      <p className="text-white text-2xl">Fastest Lap</p>
      <div className="flex mt-2">
        <Image
          src="https://rapit.com.br/assets/Redbull800x800-DrR2QuRz.webp"
          alt="constructor"
          width={170}
          height={170}
        />
        {/* <Image
        src="https://rapit.com.br/images/drivers400/max_verstappen_headshot.webp"
        alt="country"
        width={180}
        height={120}
      /> */}
        <div className="ml-8">
          <p className="text-white text-lg">Max Verstappen</p>
          <p className="text-white text-md">Red bull racing</p>
          <div className="text-grey-8a text-sm flex items-center mt-1">
            <BiTimer size={20} />
            <p className="ml-1">1:46.653</p>
          </div>
          <div className="text-grey-8a text-sm flex items-center mt-1 ml-1">
            <FaFlagCheckered size={16} />
            <p className="ml-1">33rd lap</p>
          </div>
          <div className="text-grey-8a text-sm flex items-center mt-1 ml-1">
            <IoSpeedometerOutline size={16}/>
            <p className="ml-1">Average speed of lap</p>
          </div>
          <div className="text-white text-2xl mt-1">
            <NumberTicker value={236.415} className="text-white text-4xl" />
            Kmph
          </div>
        </div>
      </div>
    </div>
  );
};
