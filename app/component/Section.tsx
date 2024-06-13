import hero from "../../public/Group 35898.png";
import apple from "../../public/Group 35937.png";
import Image from "next/image";
import star from "../../public/star-05.png";
import cube from "../../public/cube-02.png";
import cube2 from "../../public/cube-04.png";
const Section = () => {
  return (
    <div className="clash flex flex-row items-center">
      <section>
        <Image src={apple} alt="apple" width={800} height={800} />
      </section>
      <section>
        <p className="text-[#FF5555] tracking-widest">FEATURES</p>
        <h1 className="text-5xl font-extrabold mb-4 text-wrap">
          Uifry Premium
        </h1>
        <ul className="">
          <li className="font-bold flex gap-2 mb-4">
            <span>
              <Image src={star} alt="item" />
            </span>
            Budgeting Intervals
          </li>
          <li className="mb-8 text-gray-500 w-10/12 text-wrap">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor
          </li>
          <li className="font-bold flex gap-2 mb-4">
            <span>
              <Image src={cube} alt="item" />
            </span>
            Budgeting Intervals
          </li>
          <li className="mb-8 text-gray-500 w-10/12 text-wrap">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor
          </li>
          <li className="font-bold flex gap-2 mb-4">
            <span>
              <Image src={cube2} alt="item" />
            </span>
            Budgeting Intervals
          </li>
          <li className="mb-8 text-gray-500 w-10/12 text-wrap">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Section;
