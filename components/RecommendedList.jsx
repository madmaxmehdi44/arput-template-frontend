function RecommendedList({ article }) {
  return (
    <div
      dir="rtl"
      className="flex items-center px-3 py-2 mb-2 duration-200 ease-in-out cursor-pointer hover:bg-gray-900 "
    >
      {/* {console.log("From RecommendedList:" + JSON.stringify( post.video))} */}
      <img
        // src="https://www.odtap.com/wp-content/uploads/2020/12/Augmented-Reality-in-Healthcare.png"
        src={article.attributes.media.data[0].attributes.previewUrl}
        alt={article.attributes.title}
        className="sm:w-[60px] sm:h-[60px] md:w-[60px] md:h-[60px] lg:w-[140px] lg:h[80px] rounded-lg object-cover"
      />
      <div className="flex-1 mx-2">
        <h3 className="text-textColor lg:text-[16px] sm:text-[12px]">
          {article.attributes.title}
          {/* <span className="bolck text-[12px] text-gray-400">آرپوت</span> */}
        </h3>
        <div className="flex flex-wrap items-center mt-1 ">
          {/* <p>#َARPut #Augmented-Reallity</p> */}
          <p className="text-[12px] sm:text-[9px] font-medium text-textColor lg:ml-2 md:ml-0">
            نویسنده: <span>{article.attributes.description}</span>
          </p>
          <p className="text-[11px]  sm:text-[9px] font-bold text-textColor sm:mx-2 md:mx-2 lg:mx-0">
            تاریخ انتشار: <span>{article.attributes.slug}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RecommendedList;
