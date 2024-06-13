import Header from "./component/Header";
import Hero from "./component/Hero";
import Section from "./component/Section";
import Section2 from "./component/Section2";
const page = () => {
  return (
    <div className="bg-white text-black">
      <Header />
      <Hero />
      <Section />
      <Section2/>
    </div>
  );
};

export default page;
