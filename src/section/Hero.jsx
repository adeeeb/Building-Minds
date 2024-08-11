import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <>
      <div className="z-10  w-[70%] m-[100px] max-w-[100%]  text-white text-center  md:max-w-[1250px] md:m-[18%] md:mt-[15%]">
        <h1 className="text-[#E54E86] font-poppins-bold rounded-3xl font-bold uppercase text-2xl md:text-5xl p-5 md:pt-0 pt-16 md:mb-5 ">
          All miscellaneous news
        </h1>
        <p
          className="text-xl font-poppins-normal md:text-2xl   block duration-700 delay-150 relative transform transition-all opacity-0 translate-y-12 ease-out"
          data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'
        >
          Enjoy a unique experience on our website, where sports, culture,
          politics, economy, and astronomy converge. Discover the latest news
          and analyses in these diverse fields. Join us now to stay updated on
          everything exciting and new in our multidimensional world,
          encompassing the political,
          <ReactTyped
            strings={[
              "economic",
              "sports",
              "astronomical",
              "cultural dimensions",
            ]}
            typeSpeed={120}
            backSpeed={140}
          />
        </p>
        <div
          className="font-bold font-poppins-bold mt-10  justify-center items-center flex flex-col md:flex-row duration-700 delay-150 relative transform transition-all opacity-0 translate-y-12 ease-in"
          data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'
        >
          <ReactTyped
            className="text-xl md:text-3xl mr:pr-10 flex justify-center items-center "
            strings={["More Information ?!"]}
            typeSpeed={120}
            backSpeed={140}
          />

          <a
            href="#"
            className="bg-[#E54E86] font-bold py-3 px-10 mt-4 ease-out duration-500  rounded-full hover:bg-white hover:text-[#E54E86] hover:font-bold md:mt-0"
          >
            Click Here
          </a>
        </div>
      </div>

      <div className=" absolute inset-0 h-full w-full overflow-hidden bg-black  opacity-70"></div>
    </>
  );
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    var replacers = document.querySelectorAll("[data-replace]");
    for (var i = 0; i < replacers.length; i++) {
      console.log("hit here2");
      let replaceClasses = JSON.parse(
        replacers[i].dataset.replace.replace(/'/g, '"')
      );
      Object.keys(replaceClasses).forEach(function (key) {
        replacers[i].classList.remove(key);
        replacers[i].classList.add(replaceClasses[key]);
      });
    }
  }, 1);
});

export default Hero;
