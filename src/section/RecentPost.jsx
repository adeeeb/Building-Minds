import RecentPost from "../component/CardRecentPost";
import { getExampleData } from "../api/axiosInstence";
import { useEffect, useState } from "react";
import moment from "moment";

function RexentPost() {
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

        // اختيار أول 8 مقالات فقط بعد الترتيب العشوائي
        setData(shuffledArticles.slice(0, 8));
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="w-full">
        <h1 className="font-poppins-bold font-black text-3xl p-10">
          RECENT POST
        </h1>
        <div className="grid md:grid-cols-4 gap-6 items-center p-10 pt-0 mb-10">
          {data.map((article, index) => {
            // تنسيق تاريخ النشر
            const formattedDate = moment
              .utc(article.publishedAt)
              .format("MMMM Do YYYY, h:mm:ss A");

            // التعامل مع اسم الكاتب أو الوصف
            let displayAuthor;
            if (!article.author) {
              displayAuthor = "null or notfound";
            } else if (article.author.length > 14) {
              displayAuthor = article.author.substring(0, 14) + "...";
            } else {
              displayAuthor = article.author;
            }

            return (
              <RecentPost
                key={index}
                description={article.description.substring(0, 150) + "..."}
                image={article.urlToImage} // عرض الصورة
                author={displayAuthor} // عرض اسم الكاتب أو الوصف
                publishedAt={formattedDate} // عرض تاريخ النشر
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default RexentPost;
