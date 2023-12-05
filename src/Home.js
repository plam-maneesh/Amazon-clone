import React from 'react'
import "./Home.css"
import Products from './products.js';
function Home() {
  return (

    <div className='Home'>
      <div className="Home_container">

        <img class="Home_image" srcSet='https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Homepage/PC_HERO_NTA_Day-1_2X_EN._CB575872412_.jpg'
          alt='loding...' />




        <div class="Home_row">
          <Products />
          <Products />

        </div>

        <div class="Home_row">
          <Products />
          <Products />
          <Products />
        </div>

        <div class="Home_row">

          <Products />
          {/*produts */}

        </div>

      </div>
    </div>
  );
}

export default Home;