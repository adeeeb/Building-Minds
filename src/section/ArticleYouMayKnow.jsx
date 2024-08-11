import ImagesArticle from "../component/ImagesArticle";
import { getExampleData } from "../api/axiosInstence";
import { useEffect, useState } from "react";

function ArticleYouMayKnow() {
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
      <div className="text-center justify-center items-center">
        <h1 className="text-white p-[5%] md:p-[2%] font-bold text-2xl">
          ARTICLE YOU MAY KNOW
        </h1>
        <div className="pb-[2%]">
          <div className="carousel carousel-center bg-neutral rounded-box w-[80%] space-x-4 p-4">
            {data.map((article, index) => (
              <ImagesArticle key={index} article={article} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ArticleYouMayKnow;
