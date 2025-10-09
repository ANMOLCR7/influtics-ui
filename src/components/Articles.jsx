import React from 'react';

function Articles() {
  const articles = [
    {
      id: 1,
      image: '/assets/img/jo-article-1.jpg',
      title: 'Many of those Products Offer the Potential',
      date: { number: '10', txt: 'June' },
      author: 'By Admin',
      category: 'Music'
    },
    {
      id: 2,
      image: '/assets/img/jo-article-2.jpg',
      title: 'Many of those Products Offer the Potential',
      date: { number: '10', txt: 'June' },
      author: 'By Admin',
      category: 'Music'
    },
    {
      id: 3,
      image: '/assets/img/jo-article-3.jpg',
      title: 'Many of those Products Offer the Potential',
      date: { number: '10', txt: 'June' },
      author: 'By Admin',
      category: 'Music'
    }
  ];

  return (
    <section className="jo-articles">
      <div className="jo-container">
        <div className="text-center">
          <h2 className="jo-section-title">Latest Articles & News</h2>
        </div>

        <div className="row g-sm-4 g-3">
          {articles.map((article) => (
            <div key={article.id} className="col-lg-4 col-6 col-xxs-12">
              <div className="jo-article">
                <div className="jo-article__img">
                  <img src={article.image} alt="Article Image" />

                  <div className="date">
                    <span className="number">{article.date.number}</span>
                    <span className="txt">{article.date.txt}</span>
                  </div>
                </div>

                <div className="jo-article__txt">
                  <div className="jo-article__infos flex gap-x-[30px] mb-[16px]">
                    {/* single info */}
                    <div className="jo-article__info">
                      <span className="icon"><i className="flaticon-user"></i></span>
                      <span className="text font-normal text-[14px] text-etGray">{article.author}</span>
                    </div>

                    {/* single info */}
                    <div className="jo-article__info">
                      <span className="icon"><i className="flaticon-price-tag"></i></span>
                      <span className="text font-normal text-[14px] text-etGray">{article.category}</span>
                    </div>
                  </div>

                  <h4 className="jo-article__title">
                    <a href="/blog-details">{article.title}</a>
                  </h4>

                  <a href="/blog-details" className="jo-article__btn">
                    Read More <span className="icon"><i className="flaticon-arrow-right-1"></i></span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Articles;