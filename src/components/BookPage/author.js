import React from 'react';
export const BookPageAuthor = () => (
  <section className="author section-spacing" id="Author">
    <div className="container">
      <header className="text-center">
        <h2 className="text-center">O autorze</h2>
      </header>
      <div className="row">
        <div className="slide-left col-md-5 text-center"> <img src="/wp-content/uploads/2018/08/olek-m.jpg" data-at2x="/wp-content/uploads/2018/08/olek-m.jpg" alt="author" className="author-img" /></div>
        <div className="col-md-7">
          <h4 className="slide-right text-center">Aleksander Jaworski</h4>

          <hr className="slide-right" />
          <p className="slide-right">Nazywam się Aleksander Jaworski. Jestem szczęśliwym mężem i ojcem dwójki dzieci. Lubię gotować dla mojej rodziny. W szczególności uwielbiam piec pizzę. Moja przygoda z blogiem domowa.pizza zaczęła się od tego, że rodzina i znajomi zaczęli chwalić moją pizzę. Ich opinie na temat mojej pizzy były powodem dla którego zacząłem prowadzić ten blog o pizzy i napisałem tę książkę.</p>
          <p className="slide-right"> Gdy po raz kolejny usłyszałem pytanie „jaki jest ten Twój przepis na pizzę?”, pomyślałem, że warto to uporządkować, spisać i podzielić się z innymi. I tak powstała ta książka.</p>
          <img src="/wp-content/uploads/2018/07/aj_pod.png" data-at2x="/wp-content/uploads/2018/07/aj_pod.png" alt="signature" className="slide-right signature" />
          <div className="social">
            <ul>
              <li className="slide-right"><a href="https://www.facebook.com/twojadomowapizza" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a></li>
              <li className="slide-right"><a href="https://instagram.com/domowapizza" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
)