import { useEffect, useState } from "react";
import CardMoreFromUs from "../component/CardMoreFromUs";
import { getExampleData } from "../api/axiosInstence";

function MoreForUs() {
  const [data, setData] = useState([]);

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

        // اختيار أول 6 مقالات فقط بعد الترتيب العشوائي
        setData(shuffledArticles.slice(0, 6));
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h2 className="ml-[2%] font-poppins-bold font-black text-3xl">
        MORE FROM US
      </h2>
      <div className="grid md:grid-cols-3 gap-4">
        {data.map((article, index) => (
          <CardMoreFromUs key={index} article={article} />
        ))}
      </div>
    </>
  );
}

export default MoreForUs;
