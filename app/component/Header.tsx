import Image from "next/image";
import Logo from "../../public/logo.png";
import Link from "next/link";
const Header = () => {
  return (
    <header className="flex items-center justify-around pl-32 pr-32 p-4">
      <div className=" flex items-center gap-4">
        <Image src={Logo} alt="Logo" width={50} height={50} />
        <span className="ml-2 text-lg font-bold text-3xl mr-4">Uifry</span>
        <nav className="clash flex gap-4 text-xl">
          <Link href="#home" className="hover:text-[#FF5555] hover:font-bold ">
            Home
          </Link>
          <Link href="#about" className=" hover:text-[#FF5555] hover:font-bold">
            About Us
          </Link>
          <Link
            href="#pricing"
            className=" hover:text-[#FF5555] hover:font-bold"
          >
            Pricing
          </Link>
          <Link
            href="#features"
            className=" hover:text-[#FF5555] hover:font-bold"
          >
            Features
          </Link>
        </nav>
      </div>
      <button className="clash px-4 py-2 text-white bg-black rounded-sm w-48 h-14">
        Download
      </button>
    </header>
  );
};

export default Header;
