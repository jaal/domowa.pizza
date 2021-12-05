import Helmet from 'react-helmet';
import React from 'react';
import {
  BookPageHero,
  BookPageFeatures,
  BookPageCounter,
  BookPageReviews,
  BookPagePrices,
  BookPageAuthor,
  BookPageCallToAction,
  BookPageMap,
  BookPageFooter
} from '../../components/BookPage'

import './main.css'
import './styles.css'

const PizzaBookPage = () => {
  return (
    <>
      <Helmet
        title={`Książka „101 przepisów na domową pizzę” ☞ Kompletna książka o pieczeniu domowej pizzy ☞ Przepisy na ciasto, sosy, przepisy`}
        htmlAttributes={{ lang: 'PL' }}
      >
        <link href="/wp-content/uploads/landing-page-book-2018/css/styles.min.css" rel="stylesheet" />
        <link href="/wp-content/uploads/landing-page-book-2018/css/main.css" rel="stylesheet" />
        <meta name="description" content="Poznaj kompletną książkę o domowej pizzy: ☞ 101 gotowych i prostych przepisów na pizze ☞ 2 przepisy na ciasto ☞ 13 różnych sosów do pizzy. Wszystko to na 142 stronach książki o domowym pieczeniu pizzy. Poznasz wszystkie potrzebne sekrety i upiecz w domu pizzę jak profesjonalista." />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Książka „101 przepisów na domową pizzę” ☞ Kompletna książka o pieczeniu domowej pizzy ☞ Przepisy na ciasto, sosy, przepisy" />
        <meta property="og:description" content="Poznaj kompletną książkę o domowej pizzy: ☞ 101 gotowych i prostych przepisów na pizze ☞ 2 przepisy na ciasto ☞ 13 różnych sosów do pizzy. Wszystko to na 142 stronach książki o domowym pieczeniu pizzy. Poznasz wszystkie potrzebne sekrety i upiecz w domu pizzę jak profesjonalista." />
        <meta property="og:url" content="https://domowa.pizza/ksiazka" />
        <meta property="og:site_name" content="Największy blog o domowej pizzy - domowa.pizza" />
        <meta property="article:modified_time" content="2019-10-05T14:20:13+00:00" />
        <meta property="og:image" content="https://domowa.pizza/wp-content/uploads/2018/11/101-przepisow-na-domowa-pizze-okladka.jpg" />
        <meta property="og:image:width" content="456" />
        <meta property="og:image:height" content="608" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:label1" content="Szacowany czas czytania" />
        <meta name="twitter:data1" content="5 minut" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ "@context": "https://schema.org", "@graph": [{ "@type": "WebSite", "@id": "https://domowa.pizza/#website", "url": "https://domowa.pizza/", "name": "Najwi\u0119kszy blog o domowej pizzy - domowa.pizza", "description": "Sprawdzone przepisy na pizze, ciasto i sosy. Upiecz domow\u0105 pizz\u0119 jak z w\u0142oskiej pizzerii", "potentialAction": [{ "@type": "SearchAction", "target": "https://domowa.pizza/?s={search_term_string}", "query-input": "required name=search_term_string" }], "inLanguage": "pl-PL" }, { "@type": "ImageObject", "@id": "https://domowa.pizza/ksiazka#primaryimage", "inLanguage": "pl-PL", "url": "https://domowa.pizza/wp-content/uploads/2018/11/101-przepisow-na-domowa-pizze-okladka.jpg", "contentUrl": "https://domowa.pizza/wp-content/uploads/2018/11/101-przepisow-na-domowa-pizze-okladka.jpg", "width": 456, "height": 608, "caption": "Ksi\u0105\u017cka 101 przepis\u00f3w na domow\u0105 pizz\u0119" }, { "@type": "WebPage", "@id": "https://domowa.pizza/ksiazka#webpage", "url": "https://domowa.pizza/ksiazka", "name": "Ksi\u0105\u017cka \u201e101 przepis\u00f3w na domow\u0105 pizz\u0119\u201d \u261e Kompletna ksi\u0105\u017cka o pieczeniu domowej pizzy \u261e Przepisy na ciasto, sosy, przepisy", "isPartOf": { "@id": "https://domowa.pizza/#website" }, "primaryImageOfPage": { "@id": "https://domowa.pizza/ksiazka#primaryimage" }, "datePublished": "2018-11-03T21:22:09+00:00", "dateModified": "2019-10-05T14:20:13+00:00", "description": "Poznaj kompletn\u0105 ksi\u0105\u017ck\u0119 o domowej pizzy: \u261e 101 gotowych i prostych przepis\u00f3w na pizze \u261e 2 przepisy na ciasto \u261e 13 r\u00f3\u017cnych sos\u00f3w do pizzy. Wszystko to na 142 stronach ksi\u0105\u017cki o domowym pieczeniu pizzy. Poznasz wszystkie potrzebne sekrety i upiecz w domu pizz\u0119 jak profesjonalista.", "breadcrumb": { "@id": "https://domowa.pizza/ksiazka#breadcrumb" }, "inLanguage": "pl-PL", "potentialAction": [{ "@type": "ReadAction", "target": ["https://domowa.pizza/ksiazka"] }] }, { "@type": "BreadcrumbList", "@id": "https://domowa.pizza/ksiazka#breadcrumb", "itemListElement": [{ "@type": "ListItem", "position": 1, "item": { "@type": "WebPage", "@id": "https://domowa.pizza/", "url": "https://domowa.pizza/", "name": "G\u0142\u00f3wna" } }, { "@type": "ListItem", "position": 2, "item": { "@id": "https://domowa.pizza/ksiazka#webpage" } }] }] }} />
      </Helmet>


      <BookPageHero />
      <BookPageFeatures />
      <BookPageCounter />
      <BookPageReviews />
      <BookPagePrices />
      <BookPageAuthor />
      <BookPageCallToAction />
      <BookPageMap />
      <BookPageFooter />
    </>
  );
};

export default PizzaBookPage;
