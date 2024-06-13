import hero from "../../public/Group 35898.png";
import Image from "next/image";
import star from "../../public/star-05.png";
import cube from "../../public/cube-02.png";
import cube2 from "../../public/cube-04.png";
import apple from "../../public/iPhone-13-layer-2.png";
const Section2 = () => {
  return (
    <div className="clash flex flex-row items-center ">
      <section className="pl-8 w-3/4">
        <div className="p-8">
          <p className="text-[#FF5555] tracking-widest">ADVANTAGES</p>
          <h1 className="text-5xl font-extrabold mb-4 text-wrap">
            Why Choose Uifry?
          </h1>
        </div>
        <ul className="pl-4">
          <li className="font-bold flex gap-2 mb-4">
            <span>
              <Image src={star} alt="item" />
            </span>
            <h2 className="text-2xl">Cleaver Notifications</h2>
          </li>
          <li className="mb-8 text-gray-500  text-wrap">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </li>
        </ul>
      </section>
      <section className="relative w-1/2 h-[800px]">
        <Image
          src={hero}
          alt="hero"
          width={800}
          height={800}
          className="absolute inset-0 z-0"
        />
        <div className="relative z-10 flex justify-center items-center h-[800px]">
          <Image
            src={apple}
            alt="apple"
            width={500}
            height={500}
            className="z-10 rotate-12"
          />
        </div>
      </section>
    </div>
  );
};

export default Section2;
