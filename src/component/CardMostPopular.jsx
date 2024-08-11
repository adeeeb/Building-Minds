/* eslint-disable react/prop-types */
function CardMostPopular(props) {
  return (
    <div className="relative my-4 border-8 w-[75%] border-red rounded-lg md:mx-10 md:my-10 md:w-[100%] group  cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 ">
      <div className="h-full w-full">
        <img
          className="h-[300px] w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
          src={props.image}
          alt=""
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif text-3xl pb-2 font-bold text-white">
          {props.title}
        </h1>
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {props.descraption}
        </p>
        <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
          <a href={props.href}>See More</a>
        </button>
      </div>
    </div>
  );
}

export default CardMostPopular;
