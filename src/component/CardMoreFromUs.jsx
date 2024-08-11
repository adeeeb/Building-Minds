import PropTypes from "prop-types";
import moment from "moment";

function CardMoreFromUs({ article }) {
  const isNew = moment.utc(article.publishedAt).isAfter("2024-07-30");
  const labelColor = isNew ? "bg-red-600" : "bg-blue-600";
  const formattedDate = moment
    .utc(article.publishedAt)
    .format("MMMM Do YYYY, h:mm:ss A");

  return (
    <div>
      <div className="w-full mt-7 flex justify-center">
        <div className="w-[85%] ml-[2%]">
          <div className="flex justify-center h-[100%]">
            <img
              className="w-32 mr-2 h-auto max-w-full transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0 hover:drop-shadow-lg"
              src={article.urlToImage || "../src/assets/img/hero1.jpg"} // استخدم صورة المقال أو صورة افتراضية
              alt="Article"
            />
            <div className="w-full">
              <h2
                className={`${labelColor} text-white w-16 text-center font-poppins-bold font-black`}
              >
                {isNew ? "NEW" : "OLD"}
              </h2>
              <h2 className="w-72">
                <a href={article.url}>{article.title}</a>
              </h2>
              <p>{formattedDate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CardMoreFromUs.propTypes = {
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

export default CardMoreFromUs;
