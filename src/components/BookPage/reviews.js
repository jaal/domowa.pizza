import React from 'react';
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

export const BookPageReviews = () => (
  <section className="reviews section-spacing text-center" id="Reviews">
    <style>{`
      #Reviews .slick-arrow::before {
        color: #444;
      }
      `}</style>
    <div className="container">
      <h2 className="text-center">Co sądzą osoby, które kupiły książkę poprzednią książkę „Sekrety domowej pizzy” i przetestowały mój sposób na domową pizzę</h2>
      <div className="row">
        <div className="col-md-12">
          <div className="review-slider">
            <Slider {...settings}>
              <div>
                <blockquote><i className="fa fa-quote-left"></i> Książka okazała się świetna. Pizza z prawdziwego zdarzenia, taka jaką tutaj serwują kucharze z prawdziwego zdarzenia i dzięku Olkowi wykonana przeze mnie samą i w domowym piekarniku.
                  Książka jest fajnie podzielona. Bardzo przyjaźnie dla czytelnika. Na początku dowiadujemy się co i jak się do naszej pizzy wrzuca, z czym się miesza, a z czym nie i dlaczego. Techniką prostej łopatologii, nawet taka blondynka, jak ja nie miała żadnych trudności ze zrozumieniem.<i className="fa fa-quote-right"></i></blockquote>
                <figure><img src="https://domowa.pizza/wp-content/uploads/2018/07/avatar_5.jpg" data-at2x="https://domowa.pizza/wp-content/uploads/2018/07/avatar_5.jpg" alt="face" className="img-circle" width="" />
                  <h4 className="text-center">Ela</h4>
                  autorka bloga Pruna, matka, żona, emigrantka żyjąca w Katalonii</figure>
              </div>
              <div>
                <blockquote> <i className="fa fa-quote-left"></i> Tak, to moja pierwsza pizza. Muszę jednak przyznać, że jestem zachwycona sosem i ogólnie przepisami kompozycji składników. <i className="fa fa-quote-right"></i></blockquote>
                <figure><img src="https://domowa.pizza/wp-content/uploads/2018/07/avatar_3.jpg" data-at2x="https://domowa.pizza/wp-content/uploads/2018/07/avatar_3.jpg" alt="face" className="img-circle" />
                  <h4 className="text-center">Diana</h4>
                  15 maja 2018 roku</figure>
              </div>
              <div>
                <blockquote> <i className="fa fa-quote-left"></i> Pyszna, już drugi raz robiłam, idealna <i className="fa fa-quote-right"></i></blockquote>
                <figure><img src="/wp-content/uploads/2018/07/avatar_1.png" data-at2x="/wp-content/uploads/2018/07/avatar_1.png" alt="face" className="img-circle" />
                  <h4 className="text-center">Magdalena</h4>
                  25 czerwca 2018 roku</figure>
              </div>
              <div>
                <blockquote> <i className="fa fa-quote-left"></i> Bardzo fajna książka, tego mi było trzeba &#8211; wszystko dokładnie opisane, w sposób uporządkowany i ze szczegółami. <i className="fa fa-quote-right"></i></blockquote>
                <figure>
                  <h4 className="text-center">Dariusz</h4>
                  22 maja 2018 roku</figure>
              </div>
              <div>
                <blockquote> <i className="fa fa-quote-left"></i> Bardzo dziękuję za cenne wskazówki, korzystam z Twojego bloga od roku, i&#8230;. zapomniałam już co to polska pizzeria <i className="fa fa-quote-right"></i></blockquote>
                <figure>
                  <h4 className="text-center">Marta</h4>
                  3 grudnia 2018 roku</figure>
              </div>
              <div>
                <blockquote> <i className="fa fa-quote-left"></i> Dzięki za napisanie tej książeczki, wszystko jest uporządkowane i w jednym miejscu. O to mi chodziło. <i className="fa fa-quote-right"></i></blockquote>
                <figure><img src="https://domowa.pizza/wp-content/uploads/2018/07/avatar_4.jpg" data-at2x="https://domowa.pizza/wp-content/uploads/2018/07/avatar_4.jpg" alt="face" className="img-circle" />
                  <h4 className="text-center">Piotr</h4>
                  24 lutego 2018 roku</figure>
              </div>
              <div>
                <blockquote> <i className="fa fa-quote-left"></i> Najlepsza moja inwestycja, pizza wychodzi genialna. Książka jest świetna. W pierwszych 2 tygodniach dzięki niej zaoszczędziłem jakieś 200 zł. Książka + kamień do pizzy + łopatka kosztowało mnie niecałe 100 zł, przygotowanie pizzy dla 4 osób to pół kilo mąki + woda + drożdże i składniki, a że lubię pizze raczej skromną to koszt wynosi ok. 15 zł. A co miesiąc na różne wypady ze znajomymi czy rodziną na pizzę szło 400 zł. <i className="fa fa-quote-right"></i></blockquote>
                <figure>
                  <h4 className="text-center">Kacper</h4>
                  7 lutego 2018 roku</figure>
              </div>
              <div>
                <blockquote> <i className="fa fa-quote-left"></i> Jest bardzo ciekawa. Kopalnia wiedzy, dużo treści, ciekawych pomysłów i porad. Dzięki niej wiem jak ustawić piekarnik, jak obchodzić się piecem do pizzy, jak korzystać z łopatki, jak zsunąć z niej pizz żeby jej nie rozwalić. <i className="fa fa-quote-right"></i></blockquote>
                <figure><img src="https://domowa.pizza/wp-content/uploads/2018/07/avatar_2.jpg" data-at2x="https://domowa.pizza/wp-content/uploads/2018/07/avatar_2.jpg" alt="face" className="img-circle" />
                  <h4 className="text-center">Gosia</h4>
                  8 marca 2018 roku</figure>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  </section>

)