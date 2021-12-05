import React from 'react';
export const BookPageMap = () => (
  <div class="map">
    <div class="mapouter" style={{
      textAlign: 'right',
      height: '500px',
      width: '100%'
    }}>
      <div class="gmap_canvas" style={{
        overflow: 'hidden',
        background: 'none!important',
        height: '500px',
        width: '100%'
      }}>
        <iframe loading="lazy" width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=pionierska%207%2F2%2C%20wroc%C5%82aw%2C%20polska&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" />
      </div>
    </div>
  </div>
)