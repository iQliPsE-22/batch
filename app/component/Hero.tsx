import Button from "./Button";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import rightArrow from "../../public/icons8-right-arrow-50.png";
import hero from "../../public/Group 35898.png";
import apple from "../../public/iPhone-13-layer-1.png";
import apple2 from "../../public/iPhone-13-layer-2.png";
import Group from "../../public/Group 35924.png";
import star from "../../public/star-1.png";
import play from "../../public/play_icon.png";
const Hero = () => {
  return (
    <>
      <div className="flex flex-row">
        <section className=" clash flex flex-col p-20 w-1/2 m-4">
          <div className=" rounded-full">
            <h1 className="clash text-5xl font-extrabold	 mb-4 text-wrap ">
              Make the Best Financial Decisions
            </h1>
            <p className="clash mb-8  text-gray-500 text-xl">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.{" "}
            </p>
          </div>
          <div className=" flex gap-4 ">
            <Button>
              Get Started{" "}
              <span className="font-light ml-5">
                <Image src={rightArrow} width={30} alt="right" />
              </span>
            </Button>

            <button
              href="#watch-video"
              className="px-4 py-2 flex items-center gap-2 bg-transparent border border-white rounded hover:bg-white hover:text-gray-700"
            >
              <span>
                <Image src={play} alt="play" />
              </span>{" "}
              Watch Video
            </button>
          </div>
          <div className="flex flex-col min-w-fit mt-2">
            <Image
              src={star}
              alt="star"
              width={50}
              height={50}
              className="relative top-1/4 right:1/2 rotate-180"
            />
            <Image src={Group} alt="Group" width={1000} height={50} />
          </div>
        </section>
        <section>
          <Image src={hero} alt="hero" width={800} height={800} />
          <div className="gradient overlap-container flex ">
            <Image
              src={apple}
              alt="apple"
              width={300}
              height={300}
              className="first-image"
            />
            <Image
              src={apple2}
              alt="apple"
              width={300}
              height={300}
              className="second-image"
            />
            <Image
              src={apple}
              alt="apple"
              width={300}
              height={300}
              className="third-image"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
