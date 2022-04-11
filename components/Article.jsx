export default function Article({ article }) {
  return (
    // <div>
    //   <h1>کد: {article.id}</h1>
    //   <h1>کشسک: {article.attributes.title}</h1>
    //   <h1>سسش: {article.attributes.shortDescription}</h1>
    // </div>
    // <div class="bg-white">


          <a href="#" className="group">
            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img
                //src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                src={article.attributes.media.data[0].attributes.previewUrl}
                //alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                alt={article.attributes.title}
                className="w-full h-full object-center object-cover group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">
              {article.attributes.title}
            </h3>
            <p className="mt-1 text-lg font-medium text-gray-900">{article.attributes.shortDescription}</p>
          </a>
  );
}
