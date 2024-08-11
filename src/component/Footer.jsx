import { useState, useEffect } from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  ChevronDown,
} from "react-feather";
import { getExampleData } from "../api/axiosInstence"; // تأكد من استيراد دالة جلب البيانات من مكانها الصحيح

function Footer() {
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getExampleData();
        const articles = result.articles;

        // إزالة المقالات المكررة بناءً على العنوان
        const uniqueArticles = Array.from(
          new Set(articles.map((article) => article.title))
        ).map((title) => articles.find((article) => article.title === title));

        // ترتيب المقالات بشكل عشوائي
        const shuffledArticles = uniqueArticles.sort(() => Math.random() - 0.5);

        // اختيار أول 4 مقالات فقط بعد الترتيب العشوائي
        setData(shuffledArticles.slice(0, 4));
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="bg-black">
        <div className="flex md:flex-row flex-col justify-between text-white p-15 w-[100%] md:w-[85%] ml-[100px] md:ml-[200px]">
          {/* left */}
          <div className="md:w-[33%] w-[70%] mb-[50px] mt-[50px]">
            <h1 className="md:flex block text-center md:items-start font-poppins-bold font-black size-8 w-[80%] md:w-full">
              ABOUT US
            </h1>
            <p className="w-[100%]">
              Welcome to Global News Hub, your premier source for comprehensive
              and up-to-date news coverage from around the world. We bring you
              the latest stories, in-depth analyses, and diverse perspectives on
              global events.
            </p>
            <div className="flex justify-evenly md:justify-between pt-5 md:w-[25%]">
              <Facebook />
              <Instagram />
              <Twitter />
              <Youtube />
            </div>
          </div>
          {/* M */}
          <div className="md:w-[33%] w-[70%] md:mt-[50px]">
            <h1 className="md:flex md:items-start block text-center font-poppins-bold font-black size-8 w-[80%] md:w-full">
              RECENT POST
            </h1>
            <div>
              {data.map((article, index) => (
                <div key={index} className="mb-4">
                  <div
                    className="flex items-center cursor-pointer pb-2"
                    onClick={() =>
                      setActiveIndex(activeIndex === index ? null : index)
                    }
                  >
                    <ChevronDown
                      className={`pr-2 transition-transform duration-500 ease-in-out ${
                        activeIndex === index ? "rotate-180" : "rotate-0"
                      }`}
                    />
                    <p className="mr-2">{article.title}</p>
                  </div>
                  <div
                    className={`transition-all duration-500 ease-in-out transform ${
                      activeIndex === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    {activeIndex === index && (
                      <p className="pb-2">{article.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right */}
          <div className="md:w-[33%] w-[70%] mt-[50px]">
            <h1 className="md:flex md:items-start block text-center font-poppins-bold font-black size-8 w-[80%] md:w-full">
              NEWS LETTER
            </h1>
            <div className="pt-4 flex flex-col">
              <input
                type="text"
                placeholder="Your Email Address"
                className="p-2 w-[80%] text-center rounded-md text-black"
              />
              <button className="bg-blue-500 w-[80%] hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 border border-blue-700 rounded">
                Sign In
              </button>
            </div>
          </div>
        </div>
        <div className="text-white text-bold text-center font-poppins-bold text-l md:pt-2 pt-6">
          Copy Right
        </div>
      </div>
    </>
  );
}

export default Footer;
