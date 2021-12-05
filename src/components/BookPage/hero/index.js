import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

export const BookPageHero = () => (
  <section className="hero" id="Home">
    <div className="container">
      <div className="row" data-0="opacity: 1" data-800="opacity: 0">
        <div className="col-md-7">
          <header className="welcome-message">
            <h1>„101 przepisów na domową pizzę”</h1>
            <h2>Poznaj proste i sprawdzone sposoby na najlepszą pizzę dla Twojej rodziny i przyjaciół. Upiecz domową pizzę krok po kroku, jak z włoskiej pizzerii. Książka zawiera 142 strony tylko o domowej pizzy w tym: 101 przepisów na pizze, 2 przepisy na ciasta, 13 przepisów na sosy, wszystko opisane krok po kroku i dostępne błyskawicznie w formacie: pdf</h2>
          </header>
          <div className="action-button"> <a href="#Features" className="button learn-more text-center">Dowiedz się więcej <i className="fa fa-arrow-right"></i></a> <a href="https://domowa.pizza/?edd_action=add_to_cart&amp;download_id=6104" className="button buy text-center">Kup <i className="fa fa-shopping-cart"></i></a>
            * Dostępna w formacie PDF
          </div>
        </div>
        <div className="col-md-5 text-center">
          <StaticImage src="hero.jpg" alt="E-book" />
        </div>
      </div>
    </div>
  </section>
)