/* eslint-disable react/prop-types */

function BtnForImagesInArticle(props) {
  return (
    <div>
      <a href={props.id} className="btn btn-xs text-white">
        {props.number}
      </a>
    </div>
  );
}

export default BtnForImagesInArticle;
