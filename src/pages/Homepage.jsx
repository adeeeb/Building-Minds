import HeroTop from "../section/Hero";
import MostPopular from "../section/MostPopular";
import MoreForUs from "../section/MoreForUs";
import Article from "../section/ArticleYouMayKnow";
import RecentPostSection from "../section/RecentPost";

import "react-multi-carousel/lib/styles.css";

function Hero() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative flex justify-center items-center  h-screen w-[100%] hero">
        <HeroTop />
      </div>
      {/* Most Popular */}
      <div className="relative flex flex-col   mt-[-10%] justify-center items-center  w-full md:mt-[-10%] md:flex-row ">
        <MostPopular />
      </div>
      {/* More From US */}
      <MoreForUs />
      {/* Article You May Know */}
      <div className="mt-10 bg-black h-[550px]">
        <Article />
      </div>
      {/* Recent Post */}
      <div className="w-full">
        <RecentPostSection />
      </div>
      {/* Footer */}
      <footer className="m-16 bg-white"></footer>
    </>
  );
}

export default Hero;
