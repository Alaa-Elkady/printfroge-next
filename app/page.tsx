import Image from "next/image";

import frame from "../public/Frame 4.png";
export default function Home() {
  return (
    <div>
    
      {/* // page */}
      <div className="w-full flex md:flex-row flex-col items-center justify-around">
        {/* left */}
        <div className="md:w-1/3 m-4 w-full">
          <p
            className={`  p-1 uppercase mt-4 text-xs mb-2`}
          >
            Your go-to platform for 3D printing files
          </p>
          <h1 className={`font-bold text-5xl`}>
            Discover what’s possible with 3D printing
          </h1>
          <p className={` mt-3 w-2/3`}>
            Join our community of creators and explore a vast library of
            user-submitted models.
          </p>
          <button
            className={` border-2 p-1 uppercase mt-6`}
          >
            Browse models
          </button>
        </div>
        {/* right */}
        <Image src={frame} alt="frame" className="md:w-1/3 w-full m-16" />
      </div>
    </div>
  );
}
