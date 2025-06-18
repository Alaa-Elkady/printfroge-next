import Image from "next/image";
import { montserratAlternates, albertSans } from "../layout";
import img from "@/public/hero-image 1.png";
import globe from "@/public/GlobeSimple.png";
import stack from "@/public/Stack.png";
import flag from "@/public/Flag.png";
import watermark from "@/public/watermark.png";
export default function AboutPage() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      {/* top section */}
      <div className="flex justify-center items-center md:flex-row flex-col m-5">
        <Image
          src={img}
          alt="image"
          className="m-10 md:w-[500px] w-full h-[500px]"
        />
        <div className="md:w-1/3 ">
          <h1 className={`${albertSans.className} text-sm uppercase`}>
            About printforge
          </h1>
          <div
            className={`font-bold text-4xl ${montserratAlternates.className} mt-10 mb-10 w-3/4 `}
          >
            Empowering makers worldwide
          </div>
          <p className={`${albertSans.className} mb-4 w-3/4`}>
            Founded in 2023, PrintForge has quickly become the go-to platform
            for 3D printing enthusiasts, makers, and professional designers to
            share and discover amazing STL files for 3D printing
          </p>
          <p className={`${albertSans.className} mb-4 w-3/4 `}>
            Our mission is to foster a vibrant community where creativity meets
            technology, enabling anyone to bring their ideas to life through 3D
            printing
          </p>
        </div>
      </div>
      {/* center */}
      <div className="flex justify-center items-center md:flex-row flex-col p-5 ">
        <div className="md:w-1/4 md:border-r-1  p-5">
          <div
            className={`font-bold text-2xl mb-5 flex items-center  ${montserratAlternates.className}`}
          >
            <Image src={stack} alt="stack" /> 100K+ Models
          </div>
          <p className={`${albertSans.className} w-2/3`}>
            Access our vast library of community-created 3D models, from
            practical tools to artistic creations.
          </p>
        </div>
        <div className="md:w-1/4 md:border-r-1 p-5">
          <div
            className={`font-bold text-2xl mb-5 flex  items-center ${montserratAlternates.className}`}
          >
            <Image src={globe} alt="globe" /> Active Community
          </div>
          <p className={`${albertSans.className} w-2/3`}>
            Access our vast library of community-created 3D models, from
            practical tools to artistic creations.
          </p>
        </div>{" "}
        <div className="md:w-1/4 p-5">
          <div
            className={`font-bold text-2xl mb-5 flex  items-center ${montserratAlternates.className}`}
          >
            <Image src={flag} alt="flag" /> Free to Use
          </div>
          <p className={`${albertSans.className} w-2/3`}>
            Access our vast library of community-created 3D models, from
            practical tools to artistic creations.
          </p>
        </div>
      </div>
      {/* bottom */}
      <div className="flex justify-center items-left  flex-col p-5 md:w-1/2">
        <h1 className={`  text-4xl font-extrabold capitalize mb-5`}>
          our vision
        </h1>
        <div className="flex items-center flex-col">
          <p>
            At PrintForge, we believe that 3D printing is revolutionizing the
            way we create, prototype, and manufacture. Our platform serves as a
            bridge between designers and makers, enabling the sharing of
            knowledge and creativity that pushes the boundaries of what's
            possible with 3D printing.
          </p>
          <hr className="my-5 w-1/4" />
          <p>
            Whether you're a hobbyist looking for your next weekend project, an
            educator seeking teaching materials, or a professional designer
            wanting to share your creations, PrintForge provides the tools and
            community to support your journey in 3D printing.
          </p>
        </div>
      </div>
      {/* watermark */}
      <Image src={watermark} alt="watermark" className="m-5 w-[100px]" />
    </div>
  );
}
