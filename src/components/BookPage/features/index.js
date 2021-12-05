import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

export const BookPageFeatures = () => (
  <section class="features section-spacing text-center" id="Features">
    <div class="container">
      <header>
        <h2 class="text-center">Poznaj wszystkie sekrety domowej pizzy</h2>
        <h3 class="text-center">O czym jest ta książka?</h3>
      </header>
      <div class="row">
        <div class="slide-left col-sm-4">
          <StaticImage src="./feature-1.png" alt="features" />
          <h4 class="text-center">Ciasto</h4>
          <hr />
          Poznasz kompletne, sprawdzone i proste przepisy na ciasto na pizzę, które zawsze się wychodzą.
        </div>
        <div class="slide-top col-sm-4">
          <StaticImage src="./feature-2.png" alt="features" />
          <h4 class="text-center">Przepisy na pizze</h4>
          <hr />
          Odkryjesz 101 przepisów na smaczne i zdrowe pizze.Od klasycznych do zupełnie oryginalnych.
        </div>
        <div class="slide-right col-sm-4">
          <StaticImage src="./feature-3.png" alt="features" />
          <h4 class="text-center">Sosy</h4>
          <hr />
          Przygotujesz 13 szybkich i prostych sosów do pizzy, dzięki którym Twoja pizza nigdy się nie znudzi.
        </div>
      </div>
      <div class="row">
        <div class="slide-left col-sm-4">
          <StaticImage src="./feature-4.png" alt="features" />
          <h4 class="text-center">Ustawienia piekarnika</h4>
          <hr />
          Dowiesz się jak zmienić swój domowy piekarnik w maszynę do wypieku przepysznej pizzy.
        </div>
        <div class="slide-top col-sm-4">
          <StaticImage src="./feature-5.png" alt="features" />
          <h4 class="text-center">Akcesoria</h4>
          <hr />
          Zaznajomisz się z akcesoriami do przyrządzenia i pieczenia pizzy, które pozwolą Ci się wznieść na ekspercki poziom.
        </div>
        <div class="slide-right col-sm-4">
          <StaticImage src="./feature-6.png" alt="features" />
          <h4 class="text-center">Składniki</h4>
          <hr />
          Poznasz składniki do ciasta i pizzy, które stosuję i polecam.
        </div>
      </div>
    </div>
  </section>
)