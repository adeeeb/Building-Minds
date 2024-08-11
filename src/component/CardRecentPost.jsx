/* eslint-disable react/prop-types */
import { VscAccount } from "react-icons/vsc";
import { CiClock2 } from "react-icons/ci";
import moment from "moment";

function CardRecentPost(props) {
  // تنسيق التاريخ باستخدام moment.js
  const formattedDate = moment.utc(props.publishedAt).format("MMMM Do YYYY");

  return (
    <>
      <div className="border border-black w-full p-15 h-[100%] shadow-lg">
        <img
          src={props.image || "../src/assets/img/hero1.jpg"}
          alt="Article image"
          className="h-[350px] w-full"
        />
        <div className="p-6">
          <h2 className="font-poppins-bold font-bold">{props.description}</h2>
          <div className="flex md:flex md:justify-around items-center  pt-4">
            <VscAccount color="black" fontSize="25px" />
            <h4>{props.author}</h4>
            <CiClock2 color="black" fontSize="25px" />
            <h4>{formattedDate}</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardRecentPost;
