import React from 'react';

export const BookPageAddress = () => (
  <div class="container">
    <ul class="address row text-center">
      <li class="col-sm-2 col-md-3"></li>
      <li class="col-sm-4 col-md-3"><i class="slide-bottom fa fa-map-marker"></i>
        <h4 class="slide-bottom text-center">Adres</h4>
        <p class="slide-bottom">Pionierska 7/2, 53-213 Wrocław</p>
      </li>
      {/* <!-- brak telefonu
 	<li class="col-sm-4"><i class="slide-bottom fa fa-phone"></i>
<h4 class="slide-bottom text-center">Phone</h4>
<p class="slide-bottom">604-788-1832</p>
</li>
--> */}
      <li class="col-sm-4 col-md-3"><i class="slide-bottom fa fa-envelope"></i>
        <h4 class="slide-bottom text-center">Email</h4>
        <p class="slide-bottom">olek@domowa.pizza</p>
      </li>
    </ul>
  </div>
)