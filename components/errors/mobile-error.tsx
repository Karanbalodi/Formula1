import { AiOutlineFrown } from "react-icons/ai";
import FlickeringGrid from "../magicui/flickering-grid";

export const MobileError = () => {
  return (
    <div className="block md:hidden relative h-screen flex justify-center items-center -mx-8 -px-8">
      <FlickeringGrid className="h-screen w-screen" />
      <div className="absolute flex flex-col items-center">
        <AiOutlineFrown size={80} className="text-red" />
        <h1 className="font-f-bold text-md text-red mt-6">
          We are not available for mobile right now
        </h1>
      </div>
    </div>
  );
};
