import CardMostPopular from "../component/CardMostPopular";
import { useEffect, useState } from "react";
import { getExampleData } from "../api/axiosInstence";
import RingLoader from "react-spinners/RingLoader";

function MostPopular() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getExampleData();
        setData(result);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return (
      <div className="sweet-loading">
        <RingLoader
          color="#ff2baa"
          loading="true"
          size={150}
          aria-label="RingLoader"
          data-testid="RingLoader"
        />
      </div>
    );
  }

  // اختار 3 عناصر عشوائية من المصفوفة
  const shuffledArticles = data.articles
    .sort(() => Math.random() - 0.5) // ترتيب عشوائي
    .slice(0, 3); // اختيار 3 عناصر

  return (
    <>
      {shuffledArticles.map((article, index) => (
        <CardMostPopular
          key={index}
          title={article.title}
          descraption={article.description}
          image={article.urlToImage}
          href={article.url}
        />
      ))}
    </>
  );
}

export default MostPopular;
