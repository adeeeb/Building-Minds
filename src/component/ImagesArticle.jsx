/* eslint-disable react/prop-types */
import "react-multi-carousel/lib/styles.css";
import PropTypes from "prop-types";
import moment from "moment";

function ImagesArticle({ article }) {
  const isNew = moment.utc(article.publishedAt).isAfter("2024-07-30");
  const labelColor = isNew ? "bg-red-600" : "bg-blue-600";
  return (
    <>
      <div className="carousel-item  h-[350px]">
        <div className="relative">
          <img
            src={article.urlToImage}
            className=" rounded-box w-[350px] h-[100%]  "
          />
          <div className="absolute mt-[-100%] h-[100%] bg-gradient-to-t from-black  w-full"></div>

          <div className="pl-[25px]">
            <h1
              className={`absolute mt-[-50%] ${labelColor} text-white w-16 text-center font-poppins-bold font-black`}
            >
              {isNew ? "New" : "Old"}
            </h1>
            <h1 className="absolute mt-[-40%]  text-white    text-left font-poppins-bold font-black">
              <a href={article.url}>{article.description.substring(1, 150)}</a>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
ImagesArticle.propTypes = {
  article: PropTypes.shape({
    publishedAt: PropTypes.string.isRequired,
    urlToImage: PropTypes.string,
    title: PropTypes.string.isRequired,
    url: PropTypes.string,

    source: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
export default ImagesArticle;
