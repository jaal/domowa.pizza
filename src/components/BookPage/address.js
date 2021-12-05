import React from 'react';

export const BookPageAddress = () => (
  <div className="container">
    <ul className="address row text-center">
      <li className="col-sm-2 col-md-3"></li>
      <li className="col-sm-4 col-md-3"><i className="slide-bottom fa fa-map-marker"></i>
        <h4 className="slide-bottom text-center">Adres</h4>
        <p className="slide-bottom">Pionierska 7/2, 53-213 Wrocław</p>
      </li>
      {/* <!-- brak telefonu
 	<li className="col-sm-4"><i className="slide-bottom fa fa-phone"></i>
<h4 className="slide-bottom text-center">Phone</h4>
<p className="slide-bottom">604-788-1832</p>
</li>
--> */}
      <li className="col-sm-4 col-md-3"><i className="slide-bottom fa fa-envelope"></i>
        <h4 className="slide-bottom text-center">Email</h4>
        <p className="slide-bottom">olek@domowa.pizza</p>
      </li>
    </ul>
  </div>
)